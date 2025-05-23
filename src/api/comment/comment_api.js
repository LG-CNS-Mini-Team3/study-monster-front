const API_BASE_URL = "http://localhost:8080/comment";

const token = localStorage.getItem("accessToken");

export const createComment = async (body) => {
  try {
    const res = await fetch(API_BASE_URL + "/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: body,
    });
    if (res.ok) {
      window.location.reload();
    } else {
      const err = await res.json()
      const message = err.message
      alert(`생성 문제가 생겼습니다\n${message}`);
    }
  } catch (error) {
    console.error("생성에라: ", error);
    alert("생성 문제가 생겼습니다");
  }
};

export const listComment = async (num) => {
  try {
    const res = await fetch(API_BASE_URL + "/list/"+ num, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const err = await res.json()
      const message = err.message
      alert(`보여주기 문제가 생겼습니다\n${message}`);
    }
  } catch (error) {
    console.error("보여주기에라: ", error);
    alert("보여주기 문제가 생겼습니다");
  }
};

export const updateComment = async (body) => {
    try{
        const res = await fetch(API_BASE_URL + "/modify", {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json",
              ...(token && { Authorization: `Bearer ${token}` }),
            },
            body: body
        })
        if (res.ok) {
            window.location.reload();
        } else{
            const err = await res.json()
            const message = err.message
            alert(`수정 문제가 생겼습니다\n${message}`);
        }
    } catch(error) {
        console.error("수정에라: ",error)
        alert("수정 문제가 생겼습니다")
    }
}

export const deleteComment = async (body) => {
  const confirmed = window.confirm("삭제하시겠습니까?");
  if (!confirmed) {
    return;
  }

  try {
    const res = await fetch(API_BASE_URL + "/delete", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: body
    });

    if (res.ok) {
      window.location.reload();
    } else {
      const err = await res.json()
      const message = err.message
      alert(`삭제 문제가 생겼습니다\n${message}`);
    }
  } catch (error) {
    console.error("삭제에라: ", error);
    alert("삭제 문제가 생겼습니다");
  }
};

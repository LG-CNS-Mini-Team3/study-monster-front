const API_BASE_URL = "http://localhost:8080/comment";

export const createComment = async (body) => {
  try {
    const res = await fetch(API_BASE_URL + "/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    if (res.ok) {
      window.location.reload();
    } else {
      alert("생성 문제가 생겼습니다");
    }
  } catch (error) {
    console.error("생성에라: ", error);
    alert("생성 문제가 생겼습니다");
  }
};

export const listComment = async (num) => {
  try {
    const res = await fetch(API_BASE_URL + "/list?board=" + num, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = res.json();
      return data;
    } else {
      alert("보여주기 문제가 생겼습니다");
    }
  } catch (error) {
    console.error("보여주기에라: ", error);
    alert("보여주기 문제가 생겼습니다");
  }
};

export const updateComment = async (num) => {
    
}

export const deleteComment = async (num) => {
  const confirmed = window.confirm("삭제하시겠습니까?");
  if (!confirmed) {
    return;
  }

  try {
    const res = await fetch(API_BASE_URL + "/delete?board=" + num, {
      method: "delete",
    });

    if (res.ok) {
      alert("삭제 완료 되었습니다");
      window.location.reload();
    } else {
      alert("삭제 문제가 생겼습니다");
    }
  } catch (error) {
    console.error("삭제에라: ", error);
    alert("삭제 문제가 생겼습니다");
  }
};

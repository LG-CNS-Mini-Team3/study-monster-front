const API_BASE_URL = "http://localhost:8080/bookmark";

// 북마크 여부 확인
export const checkBookmark = async (body) => {
  try {
    const res = await fetch(`${API_BASE_URL}/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error("북마크 확인 실패");
    }
    return await res.json(); // true 또는 false
  } catch (err) {
    console.error("북마크 확인 에러:", err);
    return false;
  }
};

// 북마크 추가
export const addBookmark = async (body) => {
  try {
    const res = await fetch(`${API_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("북마크 추가 실패");
    return true;
  } catch (err) {
    console.error("북마크 추가 에러:", err);
    return false;
  }
};

// 북마크 해제
export const removeBookmark = async (body) => {
  try {
    const res = await fetch(`${API_BASE_URL}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("북마크 해제 실패");
    return true;
  } catch (err) {
    console.error("북마크 해제 에러:", err);
    return false;
  }
};

export const getBookmark = async (userId) => {
  try {
    const res = await fetch(`${API_BASE_URL}/list/${userId}`, {
      method: "GET"
    });

    if (!res.ok) throw new Error("북마크 불러오기 실패");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("북마크 불러오기 에러:", err);
    return false;
  }
}

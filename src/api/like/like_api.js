const API_BASE_URL = "http://localhost:8080/like";

export const addLike = async (body) => {
  try {
    const parsedBody = JSON.parse(body);
    if (hasLikedToday(parsedBody.user_id)) {
      alert("추천 또는 비추천은 1일 1회만 가능합니다.");
      return;
    }

    const res = await fetch(API_BASE_URL + "/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    if (res.ok) {
      markLikedToday(parsedBody.user_id);
      return res.ok
    } else {
      const err = await res.json();
      const message = err.message;
      alert(`추천에 문제가 생겼습니다.\n${message}`);
    }
  } catch (error) {
    console.error("생성에라: ", error);
    alert("추천에 문제가 생겼습니다");
  }
};

export const isUserLiked = async (body) => {
  try{
    const res = await fetch(API_BASE_URL + "/check", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
  } catch (error) {
    console.error("생성에라: ", error);
    alert("추천에 문제가 생겼습니다");
  }
};

export const getLikeCount = async (boardId) => {
  try {
    const res = await fetch(API_BASE_URL + "/get/"+ boardId, {
      method: "get",
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const err = await res.json();
      const message = err.message;
      alert(`추천에 문제가 생겼습니다.\n${message}`);
    }
  } catch (error) {
    console.error("보여주기에라: ", error);
    alert("추천수를 가져오는데 문제가 생겼습니다");
  }
};

const markLikedToday = (userId) => {
  const today = new Date().toISOString().slice(0, 10); // '2025-05-16' 형태
  localStorage.setItem(`recommended-${userId}`, today);
};

const hasLikedToday = (userId) => {
  const today = new Date().toISOString().slice(0, 10);
  const storedDate = localStorage.getItem(`recommended-${userId}`);
  return storedDate === today;
};

import react from "react";
import fetchWithAuth from "../../utils/FetchUtils";

const BASE_URL = "http://localhost:8080/auth";

export const fetchUser = async () => {
  try {
    const data = await fetchWithAuth("/user", {
      method: "GET",
    });
    return data;
  } catch (error) {
    console.error("사용자 정보 가져오기 실패");
    throw error;
  }
};

// 회원수정
export const updateUser = async (userData) => {
  try {
    const data = await fetchWithAuth("/update", {
      method: "PUT",
      body: userData, 
    });
    console.log("회원 정보 수정 완료:", data);
    return data;
  } catch (error) {
    console.error("회원 정보 수정 실패:", error.data || error.message);
    throw error;
  }
};

// 회원탈퇴
export const deleteUser = async () => {
  try {
    await fetchWithAuth("/delete", {
      method: "DELETE",
    });
    console.log("회원 탈퇴 완료");
    return true;
  } catch (error) {
    console.error("회원 탈퇴 실패:", error.data || error.message);
    throw error;
  }
};

export const register = async ({
  email,
  originPwd,
  checkPwd,
  name,
  nickname,
}) => {
  const registerData = {
    email: email,
    originPwd: originPwd,
    checkPwd: checkPwd,
    name: name,
    nickname: nickname,
  };
  try {
    const res = await fetch(BASE_URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const err = await res.json();
      const message = err.message;
      console.error(message);
    }
  } catch (error) {
    console.error(error);
  }
};

export const login = async ({ email, pwd }) => {
  const loginDataForBackend = {
    email: email,
    pwd: pwd,
  };

  try {
    const response = await fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDataForBackend),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      let errorData;
      errorData = await response.json();
      console.error("서버 오류 응답 (로그인 AuthApi):", errorData);
    }
  } catch (error) {
    console.error("로그인 API 호출 중 오류 발생:", error.message);
    throw error;
  }
};

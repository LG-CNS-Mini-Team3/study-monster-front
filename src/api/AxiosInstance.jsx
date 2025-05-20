import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const publicApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


authApi.interceptors.request.use(
  (config) => {
    const tokenType = localStorage.getItem("tokentype");
    const accessToken = localStorage.getItem("accessToken");

    if (tokenType && accessToken) {
      config.headers["Authorization"] = `${tokenType} ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

import axios from "axios";
import react from "react";
import { publicApi } from "./AxiosInstance";

export const login = async ({ email, pwd }) => {
  const loginData = {
    email: email,
    pwd: pwd,
  };
  const response = await publicApi.post("/auth/login", loginData);
  return response.data;
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
  const response = await publicApi.post("auth/register", registerData);
  return response.data;
};

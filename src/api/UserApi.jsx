import react from 'react'
import axios from 'axios'
import { authApi } from './AxiosInstance';

export const fetchUser = async () => {
    const response = await authApi.get("/auth/user");
    console.log(response.data);
    return response.data;
}
// 회원수정
export const updateUser = async (data) => {
    const response = await authApi.put("/auth/update", data);
    return response.data;
}
// 회원탈퇴
export const deleteUser = async () => {
    await authApi.delete("/auth/delete");
}
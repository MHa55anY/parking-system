import axiosInstance from "./axiosInstance";

export const loginUser = (payload: {userName:string, password: string}) => axiosInstance.post('/user/login', payload);
export const registerUser = (payload: {userName:string, password: string}) => axiosInstance.post('/user/register', payload);
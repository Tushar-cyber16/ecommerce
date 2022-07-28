import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDY3ODA2MDUwNzhjMDA1NDMzYzA3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODk2NjE3NSwiZXhwIjoxNjU5MjI1Mzc1fQ.zDIn05DTMeywG8slMmV51aAtagoRKmhuOnSrG2YwZT8";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers : {token :`Bearer ${TOKEN}`}
});
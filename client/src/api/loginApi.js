import { isArray } from "lodash";
import axios from "axios";
import urls from "./urls.js";

export const SignIn = async (data) => {
  // console.log(JSON.stringify(data));
  try {
    return await axios.post(`${urls.auth.login}`, data);
  } catch (err) {
    return { status: 400, message: err.response?.data?.message };
  }
};

export const Register = async (data) => {
  try {
    return await axios.post(`${urls.auth.signup}`, JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  } catch (err) {
    return { status: 400, message: err.response?.data?.message };
  }
};

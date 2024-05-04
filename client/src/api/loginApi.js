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
    return await axios.post(`${urls.auth.signup}`, data);
  } catch (err) {
    return { status: 400, message: err.response?.data?.message };
  }
};

export const VerifyMe = async (data) => {
  try {
    console.log(data);
    return await axios.put(`${urls.auth.verify}/${data}`);
  } catch (err) {
    return { status: 400, message: err.response?.data?.message };
  }
};

export const PremiumUser = async (data) => {
  try {
    return await axios.get(`${urls.auth.premium}`, {
      headers: { Authorization: data },
    });
  } catch (err) {
    return { status: 400, message: err.response?.data?.message };
  }
};

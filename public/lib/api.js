import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";
const TODO_URL = `${BASE_URL}todos`;
const SIGN_UP_URL = `${BASE_URL}auth/signup`;
const SIGN_IN_URL = `${BASE_URL}auth/signin`;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let token;
token = `Bearer ${localStorage.getItem("token")}`;

//Auth
export const signUp = async ({ email, password }) => {
  try {
    await client.post(SIGN_UP_URL, { email, password });
  } catch (error) {
    return error.response.data.message;
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const response = await client.post(SIGN_IN_URL, { email, password });
    localStorage.setItem("token", response.data.access_token);
    token = `Bearer ${response.data.access_token}`;
    return true;
  } catch (error) {
    return;
  }
};

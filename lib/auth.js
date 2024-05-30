import axios from "axios";
import Cookie from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//新しいユーザーを登録
export const registerUser = async (username, email, password) => {
  try {
    const res = await axios.post(`${API_URL}/auth/local/register`, {
      username,
      email,
      password,
    })
    Cookie.set("token", res.data.jwt, { expires: 7 });
    return res;
      // window.location.href = "/";
  } catch(err) {
    console.log(err);
    throw err;
  }
};


export const login = async (identifier, password) => {
  try {
    const res = await axios.post(`${API_URL}/auth/local`, {
      identifier,
      password,
    });
    Cookie.set("token", res.data.jwt, { expires: 7 });
    // window.location.href = "/";
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

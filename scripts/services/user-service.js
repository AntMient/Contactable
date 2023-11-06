import { tokenkey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function createUser(
    newUser = {
        email,
        password
}
){
  const {token, ...user} = await apiFetch("/signup",{body: newUser});
  sessionStorage.setItem(tokenkey, token);
  return user;
}

// export async function getUser(){

// }
import { tokenkey } from "../config.js";
import apiFetch from "./api-fetch.js";

async function login(credentials ={email,password}){
    const {token, ...user} = await apiFetch("/login",{body: credentials});
    sessionStorage.setItem(tokenkey,token);
    return user;
}
async function logout(){
    const response = await apiFetch("/logout",{method: "DELETE"});
    sessionStorage.removeItem(tokenkey)
    return response;
}

export { login,logout };
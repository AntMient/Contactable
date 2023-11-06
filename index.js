import { tokenkey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import HomePage from "./scripts/pages/home-page.js";
import LoginPage from "./scripts/pages/login-page.js";
//import {login} from "./scripts/services/sessions-service.js";

async function init() {
   try {
      const token = sessionStorage.getItem(tokenkey);

      if(!token) return DOMHandler.load(LoginPage);
      //HomePage
      DOMHandler.load(HomePage);
   } catch (error) {
      console.log(error);
      sessionStorage.removeItem(tokenkey);
      DOMHandler.load(LoginPage);
   }
   
}

//login({email: "roxana@gmail.com",password: "123456"});
init();

// import { login, logout } from "./scripts/services/sessions-service.js";

// // login({email: "roxana@gmail.com",password: "12345"}).then(user =>
// //     console.log(user)
// //     ).catch(error => console.log(error));
// const credentials = {email: "roxana@gmail.com",password: "123456"};
// async function test(){
//    try{
//     const user = await login(credentials);
//     console.log(user);
//     const message = await logout();
//     console.log(message);
//    }catch (error){
//     console.log(error);
//    }
// }
// test();
import { tokenkey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import HomePage from "./scripts/pages/home-page.js";
import LoginPage from "./scripts/pages/login-page.js";

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
init();

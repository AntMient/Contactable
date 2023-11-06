import { input } from "../components/input.js";
import DOMHandler from "../dom-handler.js";
import { login } from "../services/sessions-service.js";
import STORE from "../store.js";
import HomePage from "./home-page.js";

function render(){
    //console.log(STORE);
    const { loginError } = LoginPage.state;
    return `
      <header class="">
        <h1 class="text-xxl">Login</h1>
      </header>  
      <main class="complete-height">
        <form class="form-input js-login-form">
            ${input({
                id: "email",
                type: "email",
                placeholder: "email",
                required: true,
            })}
            ${input({
                label: "password",
                id: "password",
                type: "password",
                placeholder: "******",
                required: true,
            })}
            ${
            loginError ? `<p class="text-center error-300">${loginError}</p>` : ""}
            <div class="end border-top">
              <button class="margin-1 text text-blue">Signup</button>
              <button type="submit" class="margin-1 text text-blue">Login</button>
            </div>
        </form>
      </main>`;
}

function listenSubmitForm() {
    const form = document.querySelector(".js-login-form");
    form.addEventListener("submit", async (event) => {
        try {
            event.preventDefault();
            const { email, password } = event.target;
            const credentials = {
                email: email.value,
                password: password.value,
            };
            const user = await login(credentials);
            STORE.user = user;
            STORE.fetchContacts();
            console.log(STORE);
            DOMHandler.load(HomePage);    
        } catch (error) {
            LoginPage.state.loginError = error.message;
            DOMHandler.reload();
        }
    });
}

const LoginPage = {
    toString(){
      return render();
    },
    addListeners() {
        listenSubmitForm();
    },
    state: {
        loginError: null,
    },
  };
export default LoginPage;
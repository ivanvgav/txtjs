import { checkUserAndPassword } from "./checkUsernamePassword.js";

export const loginForm = document.getElementById('form')

export let loginButton = loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    checkUserAndPassword(usernameInput.value, passwordInput.value);

    usernameInput.value = "";
    passwordInput.value = "";
})

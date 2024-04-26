import { checkUserAndPassword } from "./checkUsernamePassword.js";

export const loginForm = document.getElementById('form')

export let loginButton = loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById('username')
    const password = document.getElementById('password')

    if (username.value == "" || password.value == "") {
        alert("Please check the form and ensure there is data to submit")
    } else {
        let div = document.createElement('div');
        div.setAttribute('class', 'container');
        div.innerText = `The username is ${username.value} and the password is ${password.value}`;
        document.body.appendChild(div);
        
        checkUserAndPassword(username, password)
        username.value = "";
        password.value = "";
    }

})

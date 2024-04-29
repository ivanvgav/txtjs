import { encryptPassword } from "./encryptPassword.js";
import { saveToLocalStorage } from "./saveToLocalStorage.js";

export const form = document.getElementById('form')

export let submitForm = form.addEventListener('submit', (e) => {
    try {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`User create successfully. The date is Username: ${username}, Email: ${email} and Password: ${password}`);
        
        let user = {
            email: email,
            username: username,
            password: encryptPassword(password),
        }

        saveToLocalStorage(user)

        window.history.back();
    }
    catch (error) {
        alert("You made a mistake. Please try again.");
        console.log(error);
    }
})

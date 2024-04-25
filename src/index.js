import { encryptPassword } from "../js/modules/encryptPassword.js"

const login = document.getElementById('login')
const modal = document.getElementById('modalContainer')

const appearBtn = () => { modal.style.display = 'block' }
const hideBtn = () => { modal.style.display = 'none' }

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

const close = document.getElementById('closeX');

const closeBtn = () => { modal.style.display = 'none' }

const loginForm = document.getElementById('form')

loginForm.addEventListener("submit", (e) => {
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
        
        checkUserAndPassword(username.value, password.value)
        username.value = "";
        password.value = "";
    }

})

function checkUserAndPassword(username, password) {
    const savedUsername = JSON.parse(localStorage.getItem('users')); 
    if (username != savedUsername.username) {
        alert("This is not a created username. Please create a new account") 
    }

    const encryptPass = encryptPassword(password)    
    if (password == savedUsername.password) {
        console.log("Same password");
    }
}
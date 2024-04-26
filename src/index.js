import { checkUserAndPassword } from "../js/modules/checkUsernamePassword.js"
import { loginForm, loginButton } from "../js/modules/loginForm.js"
import { modal, appearBtn, closeBtn, hideBtn } from "../js/modules/login.js"

//const login = document.getElementById('login')
// const modal = document.getElementById('modalContainer')
window.appearBtn = function() {
    appearBtn()
}
window.closeBtn = function() {
    closeBtn()
}
window.hideBtn = function() {
    hideBtn()
}


window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

//const close = document.getElementById('closeX');

//const closeBtn = () => { modal.style.display = 'none' }
import { appearById, hideById } from "../js/modules/login.js"
import { loginButton } from "../js/modules/loginForm.js"

window.appearById = function() {
    appearById('modalContainer')
}

window.hideById = function() {
    hideById('modalContainer')
}

window.onload = () => {
    loginButton()
}

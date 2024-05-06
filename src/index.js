import { appearById, hideById } from "../js/modules/login.js"
import { loginButton } from "../js/modules/loginForm.js"

window.appearById = function(id) {
    appearById(id)
}

window.hideById = function(id) {
    hideById(id)
}

window.onload = () => {
    loginButton()
}

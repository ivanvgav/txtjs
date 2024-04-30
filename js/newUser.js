import { matchPassword } from "./modules/encryptPassword.js";
import { submitFormButton } from "./modules/submit.js"

window.matchPassword = function() {
    matchPassword();
}

window.onload = () => submitFormButton();

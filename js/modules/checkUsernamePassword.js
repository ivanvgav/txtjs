import { getUsers } from "./saveToLocalStorage.js";
import { encryptPassword } from './encryptPassword.js'

export function checkUserAndPassword(username, password) {
    const savedUsers = getUsers(); 
    let checkUser = savedUsers.find((user) => {
        return username == user.username
    });
    
    const passwordToBeCheck = encryptPassword(password)

    if (checkUser == undefined || checkUser.password != passwordToBeCheck) {
        alert("Your credencials are incorrect. If you do not have an account, please create a new one");
    } else {
        window.location.href = "../pages/txtjs.html";
    }
}

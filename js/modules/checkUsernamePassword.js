import { getUsers } from "./saveToLocalStorage.js";
import { encryptPassword } from './encryptPassword.js'

export function checkUserAndPassword(username, password) {
    const savedUsers = getUsers(); 
    let checkUser = savedUsers.find((user) => {
        return username == user.username
    });
    
    if (!checkUser || checkUser.password != encryptPassword(password)) {
        alert("Your credencials are incorrect. If you do not have an account, please create a new one");
    } else {
        // Aqui hacer lo del login Mail
        // setLoginUserEmail(checkUser.email)
        window.location.href = "../pages/txtjs.html";
        
    }
}

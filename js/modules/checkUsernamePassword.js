import { getUsers } from "./saveToLocalStorage.js";
import { encryptPassword } from './encryptPassword.js'

export function checkUserAndPassword(username, password) {
    const savedUsers = Array(getUsers()); 
    let checkUsername = savedUsers.find((user) => {
        return username == user.username
    });
    console.log(checkUsername);
    
    if (checkUsername == undefined) {
        alert("This is not a created username. Please create a new account");
        console.log("This is not a created username. Please create a new account");
    }

    let checkUserPassword = savedUsers.find((user) => {
        encryptPassword(password)
        return password == user.password
    });
    console.log(checkUserPassword);

    if (checkUserPassword == undefined) {
        console.log("This is not a created password. Please create a new account");
    }
}

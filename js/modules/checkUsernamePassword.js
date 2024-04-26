import { getUsers } from "./saveToLocalStorage.js";
import { encryptPassword } from './encryptPassword.js'

export function checkUserAndPassword(username, password) {
    const savedUsers = Array(getUsers()); 
    let checkUser = savedUsers.find((user) => {
        return username == user.username
    });
    console.log(checkUser)
    
    if (checkUser == undefined) {
        alert("This is not a created username. Please create a new account")
        console.log("This is not a created username. Please create a new account")
    }

}

import { appearById, hideById } from "./modules/login.js" 
import { deleteTaskForUser, showTasks, submitTask } from "./modules/newTask.js"
import { getLogInUserEmail, getUserByEmail } from "./modules/saveToLocalStorage.js"

window.appearById = function(id) {
    appearById(id)
}
window.hideById = function(id) {
    hideById(id)
}

window.submitTask = function() {
    submitTask()
    console.log("submitTask");
}

window.deleteTask = function() {
    deleteTaskForUser()
    console.log("deleteTask")
}

window.onload = function() {
    showTasks()
}
console.log(getUserByEmail(getLogInUserEmail()))
// Getter y setter para mostrar tareas actualizadas

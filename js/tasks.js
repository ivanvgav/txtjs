import { appearById, hideById } from "./modules/login.js" 
import { deleteTaskForUser, filterTasks, getTaskByUserEmail, showTasks, submitTask } from "./modules/newTask.js"
import { getLogInUserEmail, getUserByEmail } from "./modules/saveToLocalStorage.js"

window.appearById = function(id) {
    appearById(id)
}
window.hideById = function(id) {
    hideById(id)
}

window.submitTask = function() {
    submitTask()
}

window.deleteTask = function() {
    deleteTaskForUser()
}

window.showTasks = function() {
    showTasks(tasks, id)
}

window.filterTasks = function() {
    filterTasks(getTaskByUserEmail(getLogInUserEmail()))
}

// Getter y setter para mostrar tareas actualizadas

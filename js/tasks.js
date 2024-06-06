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

window.deleteTaskForUser = function() {
    let taskId = getTaskByUserEmail(getLogInUserEmail());
    deleteTaskForUser(taskId)
}

// window.showTasks = function() {
//     showTasks(tasks, id)
// }

// window.filterTasks = function() {
//     filterTasks(getTaskByUserEmail(getLogInUserEmail()))
// }

window.onload = () => {
    let tasksFiltered = filterTasks(getTaskByUserEmail(getLogInUserEmail()))
    showTasks(tasksFiltered.noDate, 'no-due-date')
    showTasks(tasksFiltered.today, 'today-date')
    showTasks(tasksFiltered.week, 'this-week-date')
    showTasks(tasksFiltered.someDay, 'someday-date')
}

// Getter y setter para mostrar tareas actualizadas

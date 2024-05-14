import { getLogInUserEmail } from "./saveToLocalStorage.js";

export const newTaskElement = document.getElementById('modalContainer');

const newTaskValue = document.getElementById('new-task').value
const newDescriptionValue = document.getElementById('descrip-task').value
const newDateValue = document.getElementById('date').value

export const task = {
   task: "",
   description: "",
   date: "",
   status: "TODO",
   id: CryptoJS.SHA1(Math.random().toString()),
}

export let tasks = [];

// export function getTaskByUserEmail(email) {
//    getLogInUserEmail(email);
//
// }

export function addNewTaskToLocalStorage(task) {
   // const userEmail = getLogInUserEmail()
   task.task = newTaskValue;
   task.description = newDescriptionValue;
   task.date = newDateValue;
   tasks.push(task)
}

// export function deleteTaskForUser(id) {
//    getTaskByUserEmail(email);
//    
// }

export const submitTask = () => newTaskElement.addEventListener('submit', (e) => {
   try {
      e.preventDefault();
      
      // addNewTaskToLocalStorage(task)
   } catch (error) {
      console.log(error)
   }
})

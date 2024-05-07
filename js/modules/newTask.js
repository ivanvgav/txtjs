import { getLogInUserEmail } from "./saveToLocalStorage.js";

export const newTaskElement = document.getElementById('modalContainer');

const newTaskValue = document.getElementById('new-task').value
const newDescriptionValue = document.getElementById('descrip-task').value
const newDateValue = document.getElementById('date').value

export const newTask = {
   task: newTaskValue,
   description: newDescriptionValue,
   date: newDateValue
}
//function getTaskByUserEmail()

export function addNewTaskToLocalStorage(task) {
   userEmail = getLogInUserEmail()

}

export const submitTask = () => newTaskElement.addEventListener('submit', (e) => {
   try {
      e.preventDefault();
      
      addNewTaskToLocalStorage(newTask)
   } catch (error) {
      console.log(error)
   }
})

import { getUsers, setUsers } from "./saveToLocalStorage.js"

export const newTaskElement = document.getElementById('modalContainer');

export function saveNewTaskToLocalStorage(task, description, date) {
   let users = getUsers();
   users.push(task);
   users.push(description);
   users.push(date);
   setUsers(users);
}

export const submitTask = () => newTaskElement.addEventListener('submit', (e) => {
   try {
      e.preventDefault();
      
      const newTaskValue = document.getElementById('new-task').value
      const newDescriptionValue = document.getElementById('descrip-task').value
      const newDateValue = document.getElementById('date').value
      
      saveNewTaskToLocalStorage(newTaskValue, newDescriptionValue, newDateValue)
   } catch (error) {
      console.log(error)
   }
})

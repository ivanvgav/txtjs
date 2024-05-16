import { getLogInUserEmail, getUserByEmail } from "./saveToLocalStorage.js";

const newTaskValue = document.getElementById('new-task').value
const newDescriptionValue = document.getElementById('descrip-task').value
const newDateValue = document.getElementById('date').value

export function getTaskByUserEmail() {
   let user = getUserByEmail(getLogInUserEmail())
   return user.tasks
}

export function addNewTaskToLocalStorage() {
   let user = getUserByEmail(getLogInUserEmail());
   const task = {
      task: newTaskValue,
      description: newDescriptionValue,
      date: newDateValue,
      status: "TODO",
      id: CryptoJS.SHA1(Math.random().toString()),
   }
   user.tasks.push(task)
   // guardar de nuevo el usuario en el localStorage
   
   // actualizar el DOM con la tarea agregada
}

export function deleteTaskForUser() {
   let user = getTaskByUserEmail();
// buscar la tarea por id
   let taskById = user.find(task => {
     return task.id == id 
   })
//    borrarla
// guardar de nuevo el usuario en el localStorage
}

// export function editTaskForUser() {
//    let user = getTaskByUserEmail()
// }

export const submitTask = () => {
   try {
      console.log("submitTask")      
      addNewTaskToLocalStorage()
   } catch (error) {
      console.log(error)
   }
}

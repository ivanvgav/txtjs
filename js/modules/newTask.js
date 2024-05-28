import {
    getLogInUserEmail,
    getUserByEmail,
    updateUser,
} from "./saveToLocalStorage.js";

export function getTaskByUserEmail() {
    let user = getUserByEmail(getLogInUserEmail());
    return user.tasks;
}

export function addNewTaskToLocalStorage() {
    let user = getUserByEmail(getLogInUserEmail());

    const newTaskValue = document.getElementById("new-task").value;
    const newDescriptionValue = document.getElementById("descrip-task").value;
    const newDateValue = document.getElementById("date").value;

    const task = {
        task: newTaskValue,
        description: newDescriptionValue,
        date: newDateValue,
        status: "TODO",
        id: CryptoJS.SHA1(Math.random()).toString(),
    };
    user.tasks.push(task);
    updateUser(user);
}

export function filterTasks(tasksArray) {
    // const tasksArray = getTaskByUserEmail(getLogInUserEmail());
    let todayDate = new Date().toISOString().split("T")[0];
    let weekDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    const tasksDueToday = tasksArray.filter(task => task.date === todayDate)
    console.log("today", tasksDueToday)
    const tasksDueThisWeek = tasksArray.filter(task => task.date <= weekDate && task.date > todayDate)
    console.log("week", tasksDueThisWeek)
    const tasksDueNoDate = tasksArray.filter(task => task.date === '')
    console.log("no-date", tasksDueNoDate)
    const tasksDueSomeday = tasksArray.filter(task => task.date > weekDate)
    console.log("someday day", tasksDueSomeday)

    return {
        today: tasksDueToday,
        week: tasksDueThisWeek,
        noDate: tasksDueNoDate,
        someDay: tasksDueSomeday,
     }
}

export function showTasks(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        document.getElementById(id).innerHTML += '<div>' + tasks[i].task + `<button onclick="deleteTaskForUser('${tasks[i].id}')">x</button>` + '</div>';
    }
}

export function deleteTaskForUser(taskId) {
    const tasksByUser = getTaskByUserEmail(getLogInUserEmail());
    const taskIndex = tasksByUser.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasksByUser.splice(taskIndex, 1);

        updateTasksInLocalStorage(tasksByUser)

        filterTasks(tasksByUser)
        //TODO: make show tasks again
    } else {
        console.log("Task not found");
    }
}

// export function editTaskForUser() {
//    let user = getTaskByUserEmail()
// }

export const submitTask = () => {
    try {
        addNewTaskToLocalStorage();

        document.getElementById("today-date").innerHTML = "";
        document.getElementById("this-week-date").innerHTML = "";
        document.getElementById("no-due-date").innerHTML = "";
        document.getElementById("someday-date").innerHTML = "";

        let tasksFiltered = filterTasks(getTaskByUserEmail(getLogInUserEmail()))
        showTasks(tasksFiltered.noDate, 'no-due-date')
        showTasks(tasksFiltered.today, 'today-date')
        showTasks(tasksFiltered.week, 'this-week-date')
        showTasks(tasksFiltered.someDay, 'someday-date')
    } catch (error) {
        console.log(error);
    }
};

export const deleteTask = () => {
    try {
        console.log("deleteTask");
        deleteTaskForUser(taskId);
    } catch (error) {
        console.log(error);
    }
};

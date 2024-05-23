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
    const tasksDueThisWeek = tasksArray.filter(task => task.date <= weekDate && task.date >= todayDate)
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
    // TODO: make date matches each column
    for (let i = 0; i < tasks.length; i++) {
        document.getElementById(id).innerHTML += '<div>' + tasks[i].task + '</div>';
    }
    // for (let i = 0; i < tasks.length; i++) {
    //     document.getElementById("this-week-date").innerHTML = '<div>' + tasks[i].task + '</div>';
    // }
    // for (let i = 0; i < tasks.length; i++) {
    //     document.getElementById("no-due-date").innerHTML += '<div>' + tasks[i].task + '</div>';
    // }
    // for (let i = 0; i < tasks.length; i++) {
    //     document.getElementById("someday-date").innerHTML += '<div>' + tasks[i].task + '</div>';
    // }
}

export function deleteTaskForUser() {
    const user = getTaskByUserEmail(getLogInUserEmail());
    console.log("Tasks", user);
    const taskById = user.find((task) => {
        return task.id == user.id;
    });
    const taskErased = user.filter((task) => {
        return task.id != taskById;
    });
    user.tasks.push(taskErased);
    updateUser(user);
}

// export function editTaskForUser() {
//    let user = getTaskByUserEmail()
// }

export const submitTask = () => {
    try {
        addNewTaskToLocalStorage();
    } catch (error) {
        console.log(error);
    }
};

export const deleteTask = () => {
    try {
        console.log("deleteTask");
        deleteTaskForUser();
    } catch (error) {
        console.log(error);
    }
};

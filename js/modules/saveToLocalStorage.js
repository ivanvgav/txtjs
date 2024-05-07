export function saveToLocalStorage(user) {
    let users = getUsers()
    users.push(user);
    setUsers(users)
}


export function getUsers() {
    return JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
}

export function setUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

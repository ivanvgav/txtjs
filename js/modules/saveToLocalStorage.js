export function saveToLocalStorage(user) {
    let users = getUsers()
    users.push(user);
    setUsers(users)
}

//crear función para actualizar usuario
export function updateUser(user) {
    let users = getUsers();
    users.map(user => {
        if (user.id == id) {
           return {...user}
        } else {
            return user
        }
    })
}

export function getUsers() {
    return JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
}

export function setUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

export function setLogInUserEmail(email) {
    localStorage.setItem('userEmail', JSON.stringify(email));
}

export function getLogInUserEmail() {
    return JSON.parse(localStorage.getItem('userEmail')) ? JSON.parse(localStorage.getItem('userEmail')) : undefined;
}

export function getUserByEmail(email) {
    let users = getUsers();
    return users.find( (user) => {
        return user.email == email
    })
}
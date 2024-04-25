function matchPassword() {
    const password = document.getElementById('password');
    const reconfirmPassword = document.getElementById('reconfirm-password');

    if (password.value == reconfirmPassword.value) {
        reconfirmPassword.setCustomValidity('')
    } else {
        reconfirmPassword.setCustomValidity('Password do not match')
    }
}

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    try {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`User create succesfully. The date is Username: ${username}, Email: ${email} and Password: ${password}`);
        
        let user = {
            email: email,
            username: username,
            password: encryptPassword(password),
        }

        saveToLocalStorage(user)

        window.history.back();
    }
    catch (error) {
        alert("You made a mistake. Please try again.");
        console.log(error);
    }
})

function encryptPassword(password) {
    const encryptPass = CryptoJS.SHA1(password).toString()
    
    console.log(encryptPass)
    alert(encryptPass)
    return encryptPass.toString() 
}

function saveToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem('users'));
    if (users == null) {
        users = [];
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

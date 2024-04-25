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
        
        let users = {
            email: email,
            username: username,
            password: encryptPassword(password),
        }

        saveToLocalStorage(users)

        window.history.back();
    }
    catch (error) {
        alert("You made a mistake. Please try again.");
        console.log(error);
    }
})

function encryptPassword(password) {
    const key = CryptoJS.lib.WordArray.random(16);

    const encryptPass = CryptoJS.AES.encrypt(password, key)
    console.log(encryptPass)
    return {
        key: key.toString(),
        cipherPass: encryptPass.toString()
    }
}

function decryptPassword(encryptPassword, key){
    const keyWordArray = CryptoJS.enc.Utf8.parse(key);
    const bytes = CryptoJS.AES.decrypt(encryptPassword, keyWordArray);

    return bytes.toString(CryptoJS.enc.Utf8)
}

function saveToLocalStorage(user) {

    //
    // if (localStorage.getItem('email') == null) {
    //     localStorage.setItem('email', '[]')
    // }
    //
    // if (localStorage.getItem('username') == null) {
    //     localStorage.setItem('username', '[]')
    // }
    //
    // if (localStorage.getItem('password') == null) {
    //     localStorage.setItem('password', '[]')
    // }

    if (user == null ) {
        user = {
            email: [],
            username: [],
            password: [],
        }
    } else {
        let users = JSON.parse(localStorage.getItem('users'));
        users.push(users);
        localStorage.setItem('users', JSON.stringify(users));
    }
    // let oldEmail = JSON.parse(localStorage.getItem('email'))
    // oldEmail.push(users.email)
    //
    // let oldUsername = JSON.parse(localStorage.getItem('username'))
    // oldUsername.push(users.username)
    //
    // let oldPassword = JSON.parse(localStorage.getItem('password'))
    // oldPassword.push(users.password)
    //
    // localStorage.setItem('email', JSON.stringify(oldEmail));
    // localStorage.setItem('username', JSON.stringify(oldUsername));
    // localStorage.setItem('password', JSON.stringify(oldPassword));
}

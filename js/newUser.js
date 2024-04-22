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

        saveToLocalStorage()

        window.history.back();
    }
    catch (error) {
        alert("You made a mistake. Please try again.");
        console.log(error);
    }
})

function saveToLocalStorage() {
    let newEmail = document.getElementById('email').value
    let newUsername = document.getElementById('username').value
    let newPassword = document.getElementById('password').value

    if (localStorage.getItem('email') == null) {
        localStorage.setItem('email', '[]' )
    }

    if (localStorage.getItem('username') == null) {
        localStorage.setItem('username', '[]' )
    } 

    if (localStorage.getItem('password') == null) {
        localStorage.setItem('password', '[]' )
    }

    let oldEmail = JSON.parse(localStorage.getItem('email'))
    oldEmail.push(newEmail)

    let oldUsername = JSON.parse(localStorage.getItem('username'))
    oldUsername.push(newUsername)

    let oldPassword = JSON.parse(localStorage.getItem('password'))
    oldPassword.push(newPassword)

    localStorage.setItem('email', JSON.stringify(oldEmail));
    localStorage.setItem('username', JSON.stringify(oldUsername));
    localStorage.setItem('password', JSON.stringify(oldPassword));
}

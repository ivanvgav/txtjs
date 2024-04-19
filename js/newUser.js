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

try {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`User create succesfully. The date is Username: ${username}, Email: ${email} and Password: ${password}`);

        window.location.replace("/");
    })
}
catch (error) {
    alert("Be aware, you made an error, You should try again. Check the console");
    console.log(error);
}

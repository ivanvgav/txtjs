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

        window.history.back();
        }
    catch (error) {
        alert("You made a mistake. Please try again.");
        console.log(error);
    }
    })

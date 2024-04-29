export function encryptPassword(password) {
    const encryptPass = CryptoJS.SHA1(password).toString()
    
    return encryptPass.toString() 
}

export function matchPassword() {
    const password = document.getElementById('password');
    const reconfirmPassword = document.getElementById('reconfirm-password');

    if (password.value == reconfirmPassword.value) {
        reconfirmPassword.setCustomValidity('')
    } else {
        reconfirmPassword.setCustomValidity('Password do not match')
    }
}

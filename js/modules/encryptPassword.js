export function encryptPassword(password) {
    const encryptPass = CryptoJS.SHA1(password).toString()
    
    return encryptPass.toString() 
}

export function matchPassword() {
    const passwordInput = document.getElementById('password');
    const reconfirmPasswordInput = document.getElementById('reconfirm-password');

    if (passwordInput.value == reconfirmPasswordInput.value) {
        reconfirmPasswordInput.setCustomValidity('')
    } else {
        reconfirmPasswordInput.setCustomValidity('Password do not match')
    }
}

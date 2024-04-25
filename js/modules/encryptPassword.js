export function encryptPassword(password) {
    const encryptPass = CryptoJS.SHA1(password).toString()
    
    return encryptPass.toString() 
}
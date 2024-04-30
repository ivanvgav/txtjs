import { modal, appearBtn, closeBtn, hideBtn } from "../js/modules/login.js"

window.appearBtn = function() {
    appearBtn()
}
window.closeBtn = function() {
    closeBtn()
}
window.hideBtn = function() {
    hideBtn()
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

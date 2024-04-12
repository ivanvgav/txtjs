const login = document.getElementById('login')
const modal = document.getElementById('modalContainer')

const appearBtn = () => { modal.style.display = 'block' }
const hideBtn = () => { modal.style.display = 'none' }

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
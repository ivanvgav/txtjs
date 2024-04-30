export const login = document.getElementById('login')
export const modal = document.getElementById('modalContainer')

export const appearBtn = () => { modal.style.display = 'block' }
export const hideBtn = () => { modal.style.display = 'none' }

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

export const close = document.getElementById('closeX');

export const closeBtn = () => { modal.style.display = 'none' }
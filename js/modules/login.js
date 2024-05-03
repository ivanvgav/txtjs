export const appearById = (id) => {
    const element = document.getElementById(id)
    element.style.display = 'block'
}

export const hideById = (id) => {
    const element = document.getElementById(id)
    element.style.display = 'none'
}

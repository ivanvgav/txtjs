export const appearById = (element) => {
    const appearId = document.getElementById(element)
    appearId.style.display = 'block'
}

export const hideById = (element) => {
    const hideId = document.getElementById(element)
    hideId.style.display = 'none'
}

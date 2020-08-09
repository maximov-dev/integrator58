document.addEventListener('DOMContentLoaded', init);

function init() {
    const menuElement = document.querySelector('.menu-button');

    menuElement.addEventListener('click', setMenuToggle);
}

function setMenuToggle() {
    toggleMethod('.menu', 'menu_inactive')
}

function toggleMethod(expectedClassName, toggledClassName) {
    const element = document.querySelector(expectedClassName);
    const isActive = document.querySelector('.menu').classList.contains(toggledClassName);

    if (isActive) {
        element.classList.remove(toggledClassName);
    } else {
        element.classList.add(toggledClassName);
    }
}

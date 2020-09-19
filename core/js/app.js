document.addEventListener('DOMContentLoaded', init);

function init() {
    const menuElement = document.querySelector('.menu-button');
    const emailElement = document.querySelector('#submit-button');

    menuElement.addEventListener('click', setMenuToggle);
    emailValidation(emailElement)
}

function setMenuToggle() {
    toggleMethod('.menu', 'menu_inactive')
}

function emailValidation(emailElement) {
    emailElement.addEventListener('submit', function (event) {
        console.log(event)

        if (emailElement.validity.typeMismatch) {
            emailElement.setCustomValidity("I expect an e-mail");
        } else {
            emailElement.setCustomValidity("");
        }
    });
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

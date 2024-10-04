// Populate the current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Populate last modified date
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

const menu = document.querySelector('.menu');
const navUl = document.querySelector('nav ul');

menu.addEventListener('click', () => {
    navUl.classList.toggle('show');
    menu.classList.toggle('open');
});
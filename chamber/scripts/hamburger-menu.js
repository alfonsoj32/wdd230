// menu.js
const menu = document.getElementById('menu');
const navList = document.getElementById('nav-list');

menu.addEventListener('click', () => {
    navList.classList.toggle('show'); // Toggle the 'show' class on the nav list
    menu.classList.toggle('open'); // Toggle the 'open' class on the menu button
});

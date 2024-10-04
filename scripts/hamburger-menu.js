const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    // Change the hamburger icon to an "X" when active
    hamburger.innerHTML = navList.classList.contains('active') ? '&times;' : '&#9776;';
});
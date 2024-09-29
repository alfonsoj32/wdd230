// Set the current year and last updated date
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-updated').textContent = document.lastModified;
});
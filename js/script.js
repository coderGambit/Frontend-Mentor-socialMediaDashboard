const toggle = document.getElementById('toggle');
const toggleLeft = document.getElementById('toggle-left');
const toggleRight = document.getElementById('toggle-right');

toggleSwitch.addEventListener('click', toggleTheme);

function toggleTheme(ev) {
    toggleLeft.classList.toggle('toggle-dark-left');
    toggle.classList.toggle('toggle-dark-theme-switch');
    toggleRight.classList.toggle('toggle-dark-right');
}
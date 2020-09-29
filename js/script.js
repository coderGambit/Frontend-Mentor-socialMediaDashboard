const toggle = document.getElementById('toggle');
const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('click', toggleTheme);

function toggleTheme(ev) {

    if (toggle.classList.toggle('toggle-dark')) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.removeAttribute('data-theme');
    }
}
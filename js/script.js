const toggle = document.getElementById('toggle');
const toggleSwitch = document.getElementById('toggleSwitch');
const theme = localStorage.getItem('theme');

toggleSwitch.addEventListener('click', toggleTheme);

if (theme === 'dark') {
    toggle.classList.toggle('toggle-dark');
    document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme(ev) {

    if (toggle.classList.toggle('toggle-dark')) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    }
}
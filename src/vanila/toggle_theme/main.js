const body = document.getElementById('pageBody');
const button = document.getElementById('toggleThemeBtn');
const note = document.getElementById('themeNote');

const DARK_CLASS = 'bg-dark text-white';
const LIGHT_BTN = 'btn-light';
const DARK_BTN = 'btn-dark';

function applyTheme(isDark) {
    if (isDark) {
        body.classList.add(...DARK_CLASS.split(' '));
        button.classList.remove(DARK_BTN);
        button.classList.add(LIGHT_BTN);
    } else {
        body.classList.remove(...DARK_CLASS.split(' '));
        button.classList.remove(LIGHT_BTN);
        button.classList.add(DARK_BTN);
    }
    localStorage.setItem('isDarkTheme', isDark);
}

function toggleTheme() {
    const isDark = body.classList.contains('bg-dark');
    applyTheme(!isDark);
}

document.addEventListener('DOMContentLoaded', () => {
    const storedPreference = localStorage.getItem('isDarkTheme') === 'true';
    applyTheme(storedPreference);
    button.addEventListener('click', toggleTheme);
});

const themeKey = 'theme';

export const getTheme = () => {
    let theme = localStorage.getItem(themeKey);

    if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    return theme;
};

export const setTheme = (theme: string) => {
    localStorage.setItem(themeKey, theme);
    document.firstElementChild?.classList.toggle('dark', theme === 'dark');
};

export const toggleTheme = () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
};

export const initTheme = () => {
    setTheme(getTheme());
}

export default {
    getTheme,
    setTheme,
    toggleTheme,
    initTheme
};
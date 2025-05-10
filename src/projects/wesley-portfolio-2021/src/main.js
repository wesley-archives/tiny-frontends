document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleBtn = document.getElementById('toggleThemeBtn');
    const THEME_KEY = 'isDarkTheme';

    const applyTheme = (isDark) => {
        body.classList.toggle('theme--dark', isDark);
        localStorage.setItem(THEME_KEY, isDark);
    };

    const toggleTheme = () => {
        const isDark = body.classList.contains('theme--dark');
        applyTheme(!isDark);
    };

    const initTheme = () => {
        const storedPreference = localStorage.getItem(THEME_KEY) === 'true';
        applyTheme(storedPreference);
        toggleBtn?.addEventListener('click', toggleTheme);
    };

    initTheme();

    const toTopButton = document.getElementById('toTop');
    const SCROLL_THRESHOLD = 300;

    const handleScroll = () => {
        const shouldShow = window.scrollY > SCROLL_THRESHOLD;
        toTopButton?.classList.toggle('to-top--visible', shouldShow);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const initScrollToTop = () => {
        window.addEventListener('scroll', handleScroll);
        toTopButton?.addEventListener('click', scrollToTop);
    };

    initScrollToTop();
});

import React, { useState, useEffect } from 'react';

const Theme = () => {
    const THEME_KEY = 'isDarkTheme';
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const storedPreference = localStorage.getItem(THEME_KEY) === 'true';
        setIsDarkTheme(storedPreference);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('theme--dark', isDarkTheme);
        localStorage.setItem(THEME_KEY, isDarkTheme);
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    return (
        <button
            onClick={toggleTheme}
            title="Toggle Theme"
            className="nav__theme-toggle"
            aria-label="Toggle theme"
        >
            {isDarkTheme ? '🌚' : '🌝'}
        </button>
    );
};

export default Theme;

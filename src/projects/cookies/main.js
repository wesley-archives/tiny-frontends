function setCookie(name, value, days) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, val] = cookie.split('=');
        if (key === name) return val;
    }
    return null;
}

function handleCookieConsent(accepted) {
    setCookie('acceptCookies', accepted, 7);
    document.getElementById('cookieCard').style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
    const consent = getCookie('acceptCookies');
    if (consent !== null) {
        document.getElementById('cookieCard').style.display = 'none';
    }
});
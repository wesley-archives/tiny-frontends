document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name && email) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ name, email });
            localStorage.setItem('users', JSON.stringify(users));
            form.reset();
            alert('User registered!');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');

    toggle.addEventListener('click', () => {
        const html = document.documentElement;
        html.dataset.theme = html.dataset.theme === 'light' ? 'dark' : 'light';
    });

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const email = form.email.value;
        alert(`Thanks for reaching out, ${email}!`);
        form.reset();
    });
});

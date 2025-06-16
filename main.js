// Boot sequence
const bootScreen = document.getElementById('boot-screen');
const bootBarFill = document.getElementById('boot-bar-fill');
const lockScreen = document.getElementById('lock-screen');
const desktop = document.getElementById('desktop');
const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password-input');

// Animate boot loading bar
let loading = 0;
function animateBoot() {
    if (loading < 100) {
        loading += 2;
        bootBarFill.style.width = loading + '%';
        setTimeout(animateBoot, 30);
    } else {
        setTimeout(() => {
            bootScreen.style.opacity = 0;
            setTimeout(() => {
                bootScreen.style.display = 'none';
                showLockScreen();
            }, 700);
        }, 400);
    }
}

function showLockScreen() {
    lockScreen.style.opacity = 1;
    lockScreen.style.pointerEvents = 'auto';
    updateTime();
    setInterval(updateTime, 1000);
}

// Date/time formatting
function formatDateTime(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString(undefined, options);
    let hour = date.getHours() % 12 || 12;
    let minute = date.getMinutes().toString().padStart(2, '0');
    // Remove AM/PM for macOS look
    const timeString = `${hour}:${minute}`;
    return { dateString, timeString };
}

function updateTime() {
    const now = new Date();
    const { dateString, timeString } = formatDateTime(now);
    document.getElementById('lock-date').textContent = dateString;
    document.getElementById('lock-time').textContent = timeString;
}

// Password unlock
passwordForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (passwordInput.value === 'password') {
        lockScreen.style.opacity = 0;
        setTimeout(() => {
            lockScreen.style.display = 'none';
            desktop.style.opacity = 1;
            desktop.style.pointerEvents = 'auto';
        }, 700);
    } else {
        passwordInput.value = '';
        passwordInput.placeholder = 'Try again';
        passwordInput.classList.add('shake');
        setTimeout(() => passwordInput.classList.remove('shake'), 500);
    }
});

// Start boot animation on load
window.onload = animateBoot; 
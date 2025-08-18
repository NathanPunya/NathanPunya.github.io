// Password verification function
function verifyPassword(event) {
    event.preventDefault();

    const passwordInput = document.getElementById('passwordInput');
    const passwordMessage = document.getElementById('passwordMessage');
    const enteredPassword = passwordInput.value.trim();

    const correctPassword = 'balls';

    if (enteredPassword === '') {
        return false;
    }

    if (enteredPassword === correctPassword) {
        setTimeout(() => {
            // Example: redirect to content or show content
            // window.location.href = 'content.html';
            // Or show hidden content:
            showProtectedContent();
        }, 1500);
    } else {
        passwordInput.value = '';
        passwordInput.focus();
    }

    return false;
}

function showMessage(message, type) {
    const passwordMessage = document.getElementById('passwordMessage');
    passwordMessage.textContent = message;
    passwordMessage.className = `password-message ${type}`;
    passwordMessage.style.display = 'block';

    if (type === 'error') {
        setTimeout(() => {
            passwordMessage.style.display = 'none';
        }, 5000);
    }
}

function showProtectedContent() {
    const contentContainer = document.getElementById('content-206');
    contentContainer.innerHTML = `
    <div class="transition-wrap">
        <div class="sections">
            <div style="text-align: center; padding: 50px 20px;">
                <h1 style="color: #7c68fd; margin-bottom: 20px;">Uhhhh</h1>
                <p style="font-size: 18px; line-height: 1.6; color: #333;">
                    You have accessed the protected content?
                    Was it worth creeping around for this?
                    I'm working on a more secure way to hold my stuff statically, loser :3
                </p>
                <div style="margin-top: 30px;">
                    <a href="../../index.html" style="background: #7c68fd; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Go back to Home</a>
                </div>
            </div>
        </div>
    </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                verifyPassword(e);
            }
        });
    }
});
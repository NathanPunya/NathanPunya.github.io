function smp_custom_js() {
    let mouseCursor = document.querySelector('.cursoranimation');
    let links = document.querySelectorAll('a');

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        if (mouseCursor && typeof gsap !== 'undefined') {
            gsap.to(mouseCursor, 0.3, {
                x: e.clientX,
                y: e.clientY,
            });
        }
    }

    // Handle Semplice cursor growth for links
    links.forEach(link => {
        link.addEventListener("mouseleave", () => {
            if (typeof gsap !== 'undefined') {
                const cursorText = document.querySelector('.cursor-text');
                if (cursorText) {
                    cursorText.style.display = 'none';
                }

                document.querySelectorAll('.cursor-icon').forEach(icon => {
                    icon.style.display = 'block';
                });

                document.querySelectorAll('.cursor-top-arrow, .cursor-bottom-arrow, .cursor-right-arrow, .cursor-left-arrow, .cursor-zoom-in, .cursor-ba, .cursor-drag').forEach(icon => {
                    icon.style.display = 'block';
                });
                gsap.to('.semplice-cursor-inner', 0.3, {
                    width: '14px',
                    height: '14px',
                    backgroundColor: '#ff3c31',
                    ease: 'Expo.easeOut'
                });
            }
        });

        link.addEventListener("mouseover", () => {
            // Grow Semplice cursor and show OPEN text
            if (typeof gsap !== 'undefined') {
                const cursorText = document.querySelector('.cursor-text');
                if (cursorText) {
                    cursorText.textContent = 'OPEN';
                    cursorText.style.display = 'flex';
                }
                document.querySelectorAll('.cursor-icon').forEach(icon => {
                    icon.style.display = 'none';
                });
                document.querySelectorAll('.cursor-top-arrow, .cursor-bottom-arrow, .cursor-right-arrow, .cursor-left-arrow, .cursor-zoom-in, .cursor-ba, .cursor-drag').forEach(icon => {
                    icon.style.display = 'none';
                });
                gsap.to('.semplice-cursor-inner', 0.3, {
                    width: '110px',
                    height: '110px',
                    backgroundColor: '#ff3c31',
                    ease: 'Expo.easeOut'
                });
            }
        });
    });
}

smp_custom_js();

// call it again for every page change
window.addEventListener("sempliceAppendContent", function (e) {
    smp_custom_js();
}, false);
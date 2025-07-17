// custom javascript function
function smp_custom_js() {
    let mouseCursor = document.querySelector('.cursoranimation');
    let links = document.querySelectorAll('a');;

    // Hide trailing cursor on window load
    if (mouseCursor) {
        gsap.set(mouseCursor, {
            x: -9999,
            y: -9999
        });
    }

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        gsap.to(mouseCursor, 0.3, {
            x: e.clientX,
            y: e.clientY,
        });
    }

}
// call custom javascript
smp_custom_js();

window.addEventListener("sempliceAppendContent", function (e) {
    smp_custom_js();
}, false);

window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav a, .menu a').forEach(function (link) {
        link.onclick = null;
        link.removeAttribute('data-event');
        link.removeAttribute('data-event-type');
    });
    if (window.semplice && window.semplice.frontend_mode) {
        window.semplice.frontend_mode = 'static';
    }
});

window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            // Only act on left-click, no modifier keys, and local links
            if (
                e.button === 0 && // left click
                !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey &&
                link.hostname === window.location.hostname &&
                !link.href.startsWith('mailto:') &&
                !link.href.startsWith('tel:') &&
                !link.href.startsWith('javascript:') &&
                !link.hash // not an anchor link
            ) {
                e.preventDefault();
                window.location = link.href;
            }
        }, true);
    });
});
// LinkedIn Banner:
document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('linkedin-banner');
    const hero = document.getElementById('hero-section');
    const quoteCard = document.getElementById('quote-card');
    function onScroll() {
        if (!banner || !hero || !quoteCard) return;
        const heroBottom = hero.getBoundingClientRect().bottom;
        const quoteCardTop = quoteCard.getBoundingClientRect().top;
        if (heroBottom <= 600 && quoteCardTop > 600) {
            banner.classList.add('show-sticky');
        } else {
            banner.classList.remove('show-sticky');
        }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
});

let isTransitioning = false;
// Animate overlay down on page load
window.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('page-transition-overlay');
    if (overlay) {
        overlay.style.transform = 'translateY(0)';
        setTimeout(function () {
            overlay.style.transform = 'translateY(100%)';
        }, 50); // Small delay to ensure CSS transition triggers
    }
});


document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (link && !link.target && link.href && link.origin === window.location.origin) {
        const currentUrl = new URL(window.location.href, window.location.origin);
        const linkUrl = new URL(link.href, window.location.origin);
        const currentNoHash = currentUrl.origin + currentUrl.pathname + currentUrl.search;
        const linkNoHash = linkUrl.origin + linkUrl.pathname + linkUrl.search;
        if (linkNoHash !== currentNoHash) {
            e.preventDefault();
            e.stopImmediatePropagation();       // Prevent Semplice's handler
            if (isTransitioning) return;        // Prevent double navigation
            isTransitioning = true;
            var overlay = document.getElementById('page-transition-overlay');
            if (overlay) {
                overlay.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
                overlay.style.transform = 'translateY(0)';
                setTimeout(function () {
                    window.location.assign(link.getAttribute('href'));
                }, 700);
            } else {
                window.location.assign(link.getAttribute('href'));
            }
        }
    }
}, true);
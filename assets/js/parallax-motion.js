(function () {
    const vectorGroups = document.querySelectorAll('#parallax-vectors .parallax-group');
    function updateParallax() {
        // Only update SVG groups, not heroBg
        const hero = document.getElementById('hero-section');
        const rect = hero.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            vectorGroups.forEach(group => {
                const speed = parseFloat(group.getAttribute('data-speed'));
                group.setAttribute('transform', `translate(0, ${Math.round(window.scrollY * speed)})`);
            });
        }
    }
    window.addEventListener('scroll', function () {
        window.requestAnimationFrame(updateParallax);
    });
})();
function setRandomDelay(group) {
    const randomDuration = (15 + Math.random() * 5).toFixed(2);                     // 15 to (15+5) = 20 seconds
    const randomNegativeDelay = (-Math.random() * randomDuration).toFixed(2);       // -duration to 0 for not having page empty on load :3
    group.style.animationDuration = randomDuration + 's';
    group.style.animationDelay = randomNegativeDelay + 's';
}

function setupParallaxRandomDelays() {
    const groups = [
        document.querySelector('.parallax-left'),
        document.querySelector('.parallax-middle'),
        document.querySelector('.parallax-right')
    ];
    groups.forEach(group => {
        if (group) {
            setRandomDelay(group);
        }
    });
}

window.addEventListener('DOMContentLoaded', setupParallaxRandomDelays);


// Overriding Semplice's scrollToContent via custom GSAP scroll logic
document.addEventListener('DOMContentLoaded', function () {
    if (window.s4 && s4.helper) {
        s4.helper.scrollToContent = function () {
            const navbar = document.querySelector('.semplice-navbar');
            const targetSection = document.getElementById('quote-marquee');
            if (!targetSection) return;
            let offset = 0;
            if (navbar && getComputedStyle(navbar).position !== 'fixed') {
                offset = navbar.offsetHeight - 1;
                if (navbar.classList.contains('scroll-to-top')) {
                    offset = 0;
                }
            }
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
            if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y, autoKill: false },
                    ease: "expo.inOut"
                });
            }
        };
    }
});

// Delay hero-image reveal?
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var heroContainer = document.querySelector('.hero-image-container');
        if (heroContainer) {
            heroContainer.classList.add('revealed');
        }
    }, 0);
});
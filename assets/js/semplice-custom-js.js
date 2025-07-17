// why is this so hard
function smp_custom_js() {
    let mouseCursor = document.querySelector('.cursoranimation');
    let links = document.querySelectorAll('a');;

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        gsap.to(mouseCursor, 0.3, {
            x: e.clientX,
            y: e.clientY,
        });
    }

}

smp_custom_js();

// call it again for every page change
window.addEventListener("sempliceAppendContent", function (e) {
    smp_custom_js();
}, false);

// Display HELLO on name hover
jQuery(document).ready(function ($) {
    // Show HELLO on cursor when hovering #hello-hover
    $('body').on('mouseenter', '#hello-hover', function () {
        $('.cursor-text').text('HELLO').css('display', 'flex');
        $('.semplice-cursor-inner').css({
            'background-color': '#ff3c31',
            'color': '#ffffff'
        });
        // Hide all icons
        $('.cursor-icon').hide();
        // Expand cursor size using GSAP
        gsap.to('.semplice-cursor-inner', 0.7, {
            width: '110px',
            height: '110px',
            backgroundColor: '#ff3c31',
            ease: 'Expo.easeOut'
        });
    });
    $('body').on('mouseleave', '#hello-hover', function () {
        // Hide cursor text and restore default colors
        $('.cursor-text').hide();
        $('.semplice-cursor-inner').css({
            'background-color': '',
            'color': ''
        });
        $('.cursor-icon').hide();
        // Restore cursor size using GSAP
        gsap.to('.semplice-cursor-inner', 0.7, {
            width: '14px',
            height: '14px',
            backgroundColor: '#ff3c31',
            ease: 'Expo.easeOut'
        });
    });
});
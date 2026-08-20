(function ($) {
    "use strict"; var playRepeat = []; var options = JSON.parse('{"id":"paragraph-1","trigger":"#content-holder #paragraph-1","start":"top+=100% bottom","end":"+=90%","pin":true,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("paragraph-1".indexOf("section_") > -1 || "paragraph-1".indexOf("cover") > -1) {
            $("#paragraph-1").wrap("<div class='section-pin sp_paragraph-1'></div>");
            options["trigger"] = ".sp_paragraph-1";
        } else if ("paragraph-1".indexOf("column_") > -1) {
            $("#paragraph-1").wrap("<div class='column-pin-outer cpo_paragraph-1'><div class='column-pin-inner cpi_paragraph-1 '></div></div>");
            options["trigger"] = ".cpi_paragraph-1";
            var atts = $("#paragraph-1").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_paragraph-1").attr(attr.name, attr.value);
                }
            });
        } else if ("paragraph-1".indexOf("content_") > -1) {
            options["trigger"] = "#paragraph-1";
        }

    }
    s4.animate.gsap["paragraph-1"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #paragraph-1", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"opacity":1}');
    // add to timeline
    s4.animate.gsap["paragraph-1"].to("#content-holder #paragraph-1", props);
    // pause timeline
    s4.animate.gsap["paragraph-1"].pause();
    var playRepeat = [];
    s4.animate.gsap["paragraph-1-content"] = gsap.timeline({
        scrollTrigger: "#content-holder #paragraph-1-content .is-content",
        repeat: 0,

    });

    // gsap set transform
    gsap.set("#content-holder #paragraph-1-content .is-content", JSON.parse('{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":1.2,"ease":"Power2.easeOut","delay":0.4,"opacity":1,"x":"0rem","y":0}');
    // add to timeline
    s4.animate.gsap["paragraph-1-content"].to("#content-holder #paragraph-1-content .is-content", props);
    // pause timeline
    s4.animate.gsap["paragraph-1-content"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"paragraph-4","trigger":"#content-holder #paragraph-4","start":"top+=100% bottom","end":"+=110%","pin":true,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("paragraph-4".indexOf("section_") > -1 || "paragraph-4".indexOf("cover") > -1) {
            $("#paragraph-4").wrap("<div class='section-pin sp_paragraph-4'></div>");
            options["trigger"] = ".sp_paragraph-4";
        } else if ("paragraph-4".indexOf("column_") > -1) {
            $("#paragraph-4").wrap("<div class='column-pin-outer cpo_paragraph-4'><div class='column-pin-inner cpi_paragraph-4 '></div></div>");
            options["trigger"] = ".cpi_paragraph-4";
            var atts = $("#paragraph-4").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_paragraph-4").attr(attr.name, attr.value);
                }
            });
        } else if ("paragraph-4".indexOf("content_") > -1) {
            options["trigger"] = "#paragraph-4";
        }

    }
    s4.animate.gsap["paragraph-4"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #paragraph-4", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"opacity":1}');
    // add to timeline
    s4.animate.gsap["paragraph-4"].to("#content-holder #paragraph-4", props);
    // pause timeline
    s4.animate.gsap["paragraph-4"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"paragraph-2","trigger":"#content-holder #paragraph-2","start":"top+=100% bottom","end":"+=110%","pin":true,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("paragraph-2".indexOf("section_") > -1 || "paragraph-2".indexOf("cover") > -1) {
            $("#paragraph-2").wrap("<div class='section-pin sp_paragraph-2'></div>");
            options["trigger"] = ".sp_paragraph-2";
        } else if ("paragraph-2".indexOf("column_") > -1) {
            $("#paragraph-2").wrap("<div class='column-pin-outer cpo_paragraph-2'><div class='column-pin-inner cpi_paragraph-2 '></div></div>");
            options["trigger"] = ".cpi_paragraph-2";
            var atts = $("#paragraph-2").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_paragraph-2").attr(attr.name, attr.value);
                }
            });
        } else if ("paragraph-2".indexOf("content_") > -1) {
            options["trigger"] = "#paragraph-2";
        }

    }
    s4.animate.gsap["paragraph-2"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #paragraph-2", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"opacity":1}');
    // add to timeline
    s4.animate.gsap["paragraph-2"].to("#content-holder #paragraph-2", props);
    // pause timeline
    s4.animate.gsap["paragraph-2"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"paragraph-3","trigger":"#content-holder #paragraph-3","start":"top+=100% bottom","end":"+=110%","pin":true,"markers":false,"pinSpacing":true,"scrub":0}');
    if (options.pin === true) {
        if ("paragraph-3".indexOf("section_") > -1 || "paragraph-3".indexOf("cover") > -1) {
            $("#paragraph-3").wrap("<div class='section-pin sp_paragraph-3'></div>");
            options["trigger"] = ".sp_paragraph-3";
        } else if ("paragraph-3".indexOf("column_") > -1) {
            $("#paragraph-3").wrap("<div class='column-pin-outer cpo_paragraph-3'><div class='column-pin-inner cpi_paragraph-3 '></div></div>");
            options["trigger"] = ".cpi_paragraph-3";
            var atts = $("#paragraph-3").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_paragraph-3").attr(attr.name, attr.value);
                }
            });
        } else if ("paragraph-3".indexOf("content_") > -1) {
            options["trigger"] = "#paragraph-3";
        }

    }
    s4.animate.gsap["paragraph-3"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #paragraph-3", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"opacity":1}');
    // add to timeline
    s4.animate.gsap["paragraph-3"].to("#content-holder #paragraph-3", props);
    // pause timeline
    s4.animate.gsap["paragraph-3"].pause();
    $(window).scroll();
})(jQuery); (function ($) {
    "use strict"; var playRepeat = []; var options = JSON.parse('{"id":"quote-card","trigger":"#content-holder #quote-card","start":"top bottom-=100%","end":"+=120%","pin":true,"markers":false,"pinSpacing":true,"scrub":0}');
    if (options.pin === true) {
        if ("quote-card".indexOf("section_") > -1 || "quote-card".indexOf("cover") > -1) {
            $("#quote-card").wrap("<div class='section-pin sp_quote-card'></div>");
            options["trigger"] = ".sp_quote-card";
        } else if ("quote-card".indexOf("column_") > -1) {
            $("#quote-card").wrap("<div class='column-pin-outer cpo_quote-card'><div class='column-pin-inner cpi_quote-card '></div></div>");
            options["trigger"] = ".cpi_quote-card";
            var atts = $("#quote-card").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_quote-card").attr(attr.name, attr.value);
                }
            });
        } else if ("quote-card".indexOf("content_") > -1) {
            options["trigger"] = "#quote-card";
        }
        gsap.set(".sp_quote-card", { zIndex: "2" });
    }
    s4.animate.gsap["quote-card"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #quote-card", JSON.parse('{"filter":"brightness(100%) ","clipPath":"circle(20% at 50% 50%)","translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"filter":"brightness(100%) ","clipPath":"circle(100% at 50% 50%)"}');
    // add to timeline
    s4.animate.gsap["quote-card"].to("#content-holder #quote-card", props);
    // pause timeline
    s4.animate.gsap["quote-card"].pause();

    // gsap set transform
    gsap.set("#content-holder #quote-card", JSON.parse('{"filter":"brightness(100%) ","clipPath":"circle(20% at 50% 50%)","translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"rotation":"2deg","scaleX":0.92,"scaleY":0.92,"filter":"brightness(35%) "}');
    // add to timeline
    s4.animate.gsap["quote-card"].to("#content-holder #quote-card", props);
    // pause timeline
    s4.animate.gsap["quote-card"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"quote-card-text-content","trigger":"#content-holder #quote-card-text-content .is-content","start":"top bottom","end":"bottom-=55% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("quote-card-text-content".indexOf("section_") > -1 || "quote-card-text-content".indexOf("cover") > -1) {
            $("#quote-card-text-content").wrap("<div class='section-pin sp_quote-card-text-content'></div>");
            options["trigger"] = ".sp_quote-card-text-content";
        } else if ("quote-card-text-content".indexOf("column_") > -1) {
            $("#quote-card-text-content").wrap("<div class='column-pin-outer cpo_quote-card-text-content'><div class='column-pin-inner cpi_quote-card-text-content '></div></div>");
            options["trigger"] = ".cpi_quote-card-text-content";
            var atts = $("#quote-card-text-content").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_quote-card-text-content").attr(attr.name, attr.value);
                }
            });
        } else if ("quote-card-text-content".indexOf("content_") > -1) {
            options["trigger"] = "#quote-card-text-content";
        }

    }
    s4.animate.gsap["quote-card-text-content"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #quote-card-text-content .is-content", JSON.parse('{"translateY":0,"translateX":"100%","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"x":"0%","y":0}');
    // add to timeline
    s4.animate.gsap["quote-card-text-content"].to("#content-holder #quote-card-text-content .is-content", props);
    // pause timeline
    s4.animate.gsap["quote-card-text-content"].pause();
    $(window).scroll();
})(jQuery);
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
// call it again for every page change
window.addEventListener("sempliceAppendContent", function (e) {
    smp_custom_js();
}, false);
window.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('page-transition-overlay');
    if (overlay) {
        overlay.style.transform = 'translateY(0)';
        setTimeout(function () {
            overlay.style.transform = 'translateY(100%)';
        }, 50);
    }
});

document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (
        link &&
        !link.target &&
        link.href &&
        link.origin === window.location.origin &&
        link.pathname !== window.location.pathname
    ) {
        e.preventDefault();
        var overlay = document.getElementById('page-transition-overlay');
        if (overlay) {
            overlay.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
            overlay.style.transform = 'translateY(0)';
            setTimeout(function () {
                window.location = link.href;
            }, 700);
        } else {
            window.location = link.href;
        }
    }
}, true);

let hasExploded = false;
let scrollTimeout;

// Enhanced scroll indicator behavior
window.addEventListener('scroll', function () {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const scrollY = window.scrollY;

    // Clear existing timeout
    clearTimeout(scrollTimeout);

    if (scrollY > 100 && !hasExploded) {
        // Trigger the spicy explosion animation
        hasExploded = true;
        scrollIndicator.classList.add('explode');

        // Remove the explode class after animation completes
        setTimeout(() => {
            scrollIndicator.classList.remove('explode');
            scrollIndicator.classList.add('hidden');
        }, 700);

    } else if (scrollY <= 100 && hasExploded) {
        // Return animation when back at top
        hasExploded = false;
        scrollIndicator.classList.remove('hidden');
        scrollIndicator.classList.add('return');

        // Remove the return class after animation completes
        setTimeout(() => {
            scrollIndicator.classList.remove('return');
        }, 600);
    }

    // Hide when reaching bottom
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 50 && !hasExploded) {
        scrollIndicator.classList.add('explode');
        hasExploded = true;

        setTimeout(() => {
            scrollIndicator.classList.remove('explode');
            scrollIndicator.classList.add('hidden');
        }, 600);
    }
});

// Add some extra spice with mouse interaction
document.addEventListener('DOMContentLoaded', function () {
    const scrollIndicator = document.getElementById('scrollIndicator');

    // Add hover effect for extra interactivity
    scrollIndicator.addEventListener('mouseenter', function () {
        if (!hasExploded) {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });

    scrollIndicator.addEventListener('mouseleave', function () {
        if (!hasExploded) {
            this.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});
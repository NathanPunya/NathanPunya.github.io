(function ($) {
    "use strict"; var playRepeat = [];
    s4.animate.gsap["quote-container"] = gsap.timeline({
        scrollTrigger: "#content-holder #quote-container .is-content",
        repeat: 0,

    });

    // gsap set transform
    gsap.set("#content-holder #quote-container .is-content", JSON.parse('{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":1.2,"ease":"Power2.easeOut","delay":0.4,"opacity":1,"x":"0rem","y":0}');
    // add to timeline
    s4.animate.gsap["quote-container"].to("#content-holder #quote-container .is-content", props);
    // pause timeline
    s4.animate.gsap["quote-container"].pause();
    var playRepeat = [];
    s4.animate.gsap["welcome-top-text"] = gsap.timeline({
        scrollTrigger: "#content-holder #welcome-top-text .is-content",
        repeat: 0,

    });

    // gsap set transform
    gsap.set("#content-holder #welcome-top-text .is-content", JSON.parse('{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":1.2,"ease":"Power2.easeOut","delay":0.48,"opacity":1,"x":"0rem","y":0}');
    // add to timeline
    s4.animate.gsap["welcome-top-text"].to("#content-holder #welcome-top-text .is-content", props);
    // pause timeline
    s4.animate.gsap["welcome-top-text"].pause();
    var playRepeat = [];
    s4.animate.gsap["welcome-intro-text"] = gsap.timeline({
        scrollTrigger: "#content-holder #welcome-intro-text .is-content",
        repeat: 0,

    });

    // gsap set transform
    gsap.set("#content-holder #welcome-intro-text .is-content", JSON.parse('{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":1.2,"ease":"Power2.easeOut","delay":0.48,"opacity":1,"x":"0rem","y":0}');
    // add to timeline
    s4.animate.gsap["welcome-intro-text"].to("#content-holder #welcome-intro-text .is-content", props);
    // pause timeline
    s4.animate.gsap["welcome-intro-text"].pause();
    var playRepeat = [];
    s4.animate.gsap["welcome-project-carousel"] = gsap.timeline({
        scrollTrigger: "#content-holder #welcome-project-carousel",
        repeat: 0,

    });

    // gsap set transform
    gsap.set("#content-holder #welcome-project-carousel", JSON.parse('{"clipPath":"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)","translateY":"0%","translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"2.1","scaleY":"1.9"}'));

    // parse props
    var props = JSON.parse('{"duration":2,"ease":"Power4.easeOut","delay":0.16,"scaleX":1,"scaleY":1,"clipPath":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}');
    // add to timeline
    s4.animate.gsap["welcome-project-carousel"].to("#content-holder #welcome-project-carousel", props);
    // pause timeline
    s4.animate.gsap["welcome-project-carousel"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"welcome-gallery-container","trigger":"#content-holder #welcome-gallery-container .is-content","start":"top+=12% bottom","end":"bottom-=10% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("welcome-gallery-container".indexOf("section_") > -1 || "welcome-gallery-container".indexOf("cover") > -1) {
            $("#welcome-gallery-container").wrap("<div class='section-pin sp_welcome-gallery-container'></div>");
            options["trigger"] = ".sp_welcome-gallery-container";
        } else if ("welcome-gallery-container".indexOf("column_") > -1) {
            $("#welcome-gallery-container").wrap("<div class='column-pin-outer cpo_welcome-gallery-container'><div class='column-pin-inner cpi_welcome-gallery-container '></div></div>");
            options["trigger"] = ".cpi_welcome-gallery-container";
            var atts = $("#welcome-gallery-container").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_welcome-gallery-container").attr(attr.name, attr.value);
                }
            });
        } else if ("welcome-gallery-container".indexOf("content_") > -1) {
            options["trigger"] = "#welcome-gallery-container";
        }

    }
    s4.animate.gsap["welcome-gallery-container"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #welcome-gallery-container .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"scaleX":1.2,"scaleY":1.2,"x":"0rem","y":"-10%"}');
    // add to timeline
    s4.animate.gsap["welcome-gallery-container"].to("#content-holder #welcome-gallery-container .is-content", props);
    // pause timeline
    s4.animate.gsap["welcome-gallery-container"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"content_0abn9gvwm","trigger":"#content-holder #content_0abn9gvwm .is-content","start":"top-=60% bottom","end":"bottom-=120% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("content_0abn9gvwm".indexOf("section_") > -1 || "content_0abn9gvwm".indexOf("cover") > -1) {
            $("#content_0abn9gvwm").wrap("<div class='section-pin sp_content_0abn9gvwm'></div>");
            options["trigger"] = ".sp_content_0abn9gvwm";
        } else if ("content_0abn9gvwm".indexOf("column_") > -1) {
            $("#content_0abn9gvwm").wrap("<div class='column-pin-outer cpo_content_0abn9gvwm'><div class='column-pin-inner cpi_content_0abn9gvwm '></div></div>");
            options["trigger"] = ".cpi_content_0abn9gvwm";
            var atts = $("#content_0abn9gvwm").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_content_0abn9gvwm").attr(attr.name, attr.value);
                }
            });
        } else if ("content_0abn9gvwm".indexOf("content_") > -1) {
            options["trigger"] = "#content_0abn9gvwm";
        }

    }
    s4.animate.gsap["content_0abn9gvwm"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #content_0abn9gvwm .is-content", JSON.parse('{"translateY":"80%","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}');
    // add to timeline
    s4.animate.gsap["content_0abn9gvwm"].to("#content-holder #content_0abn9gvwm .is-content", props);
    // pause timeline
    s4.animate.gsap["content_0abn9gvwm"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"big-ahh-content","trigger":"#content-holder #big-ahh-content .is-content","start":"top-=200% bottom","end":"bottom-=115% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0.2}');
    if (options.pin === true) {
        if ("big-ahh-content".indexOf("section_") > -1 || "big-ahh-content".indexOf("cover") > -1) {
            $("#big-ahh-content").wrap("<div class='section-pin sp_big-ahh-content'></div>");
            options["trigger"] = ".sp_big-ahh-content";
        } else if ("big-ahh-content".indexOf("column_") > -1) {
            $("#big-ahh-content").wrap("<div class='column-pin-outer cpo_big-ahh-content'><div class='column-pin-inner cpi_big-ahh-content '></div></div>");
            options["trigger"] = ".cpi_big-ahh-content";
            var atts = $("#big-ahh-content").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_big-ahh-content").attr(attr.name, attr.value);
                }
            });
        } else if ("big-ahh-content".indexOf("content_") > -1) {
            options["trigger"] = "#big-ahh-content";
        }

    }
    s4.animate.gsap["big-ahh-content"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #big-ahh-content .is-content", JSON.parse('{"translateY":"60%","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}');
    // add to timeline
    s4.animate.gsap["big-ahh-content"].to("#content-holder #big-ahh-content .is-content", props);
    // pause timeline
    s4.animate.gsap["big-ahh-content"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"resume-link","trigger":"#content-holder #resume-link .is-content","start":"top-=751% bottom","end":"bottom-=725% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0.2}');
    if (options.pin === true) {
        if ("resume-link".indexOf("section_") > -1 || "resume-link".indexOf("cover") > -1) {
            $("#resume-link").wrap("<div class='section-pin sp_resume-link'></div>");
            options["trigger"] = ".sp_resume-link";
        } else if ("resume-link".indexOf("column_") > -1) {
            $("#resume-link").wrap("<div class='column-pin-outer cpo_resume-link'><div class='column-pin-inner cpi_resume-link '></div></div>");
            options["trigger"] = ".cpi_resume-link";
            var atts = $("#resume-link").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_resume-link").attr(attr.name, attr.value);
                }
            });
        } else if ("resume-link".indexOf("content_") > -1) {
            options["trigger"] = "#resume-link";
        }
        gsap.set("#resume-link", { zIndex: "3" });
    }
    s4.animate.gsap["resume-link"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #resume-link .is-content", JSON.parse('{"translateY":"60%","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}');
    // add to timeline
    s4.animate.gsap["resume-link"].to("#content-holder #resume-link .is-content", props);
    // pause timeline
    s4.animate.gsap["resume-link"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"selected-works-marquee-text","trigger":"#content-holder #selected-works-marquee-text .is-content","start":"top bottom","end":"bottom top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("selected-works-marquee-text".indexOf("section_") > -1 || "selected-works-marquee-text".indexOf("cover") > -1) {
            $("#selected-works-marquee-text").wrap("<div class='section-pin sp_selected-works-marquee-text'></div>");
            options["trigger"] = ".sp_selected-works-marquee-text";
        } else if ("selected-works-marquee-text".indexOf("column_") > -1) {
            $("#selected-works-marquee-text").wrap("<div class='column-pin-outer cpo_selected-works-marquee-text'><div class='column-pin-inner cpi_selected-works-marquee-text '></div></div>");
            options["trigger"] = ".cpi_selected-works-marquee-text";
            var atts = $("#selected-works-marquee-text").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_selected-works-marquee-text").attr(attr.name, attr.value);
                }
            });
        } else if ("selected-works-marquee-text".indexOf("content_") > -1) {
            options["trigger"] = "#selected-works-marquee-text";
        }

    }
    s4.animate.gsap["selected-works-marquee-text"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #selected-works-marquee-text .is-content", JSON.parse('{"translateY":0,"translateX":"17.7778rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1.4","scaleY":"1.4"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"x":"-17.777777777778rem","y":0}');
    // add to timeline
    s4.animate.gsap["selected-works-marquee-text"].to("#content-holder #selected-works-marquee-text .is-content", props);
    // pause timeline
    s4.animate.gsap["selected-works-marquee-text"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"selected-works-marquee-text-2","trigger":"#content-holder #selected-works-marquee-text-2 .is-content","start":"top bottom","end":"bottom top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("selected-works-marquee-text-2".indexOf("section_") > -1 || "selected-works-marquee-text-2".indexOf("cover") > -1) {
            $("#selected-works-marquee-text-2").wrap("<div class='section-pin sp_selected-works-marquee-text-2'></div>");
            options["trigger"] = ".sp_selected-works-marquee-text-2";
        } else if ("selected-works-marquee-text-2".indexOf("column_") > -1) {
            $("#selected-works-marquee-text-2").wrap("<div class='column-pin-outer cpo_selected-works-marquee-text-2'><div class='column-pin-inner cpi_selected-works-marquee-text-2 '></div></div>");
            options["trigger"] = ".cpi_selected-works-marquee-text-2";
            var atts = $("#selected-works-marquee-text-2").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_selected-works-marquee-text-2").attr(attr.name, attr.value);
                }
            });
        } else if ("selected-works-marquee-text-2".indexOf("content_") > -1) {
            options["trigger"] = "#selected-works-marquee-text-2";
        }

    }
    s4.animate.gsap["selected-works-marquee-text-2"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #selected-works-marquee-text-2 .is-content", JSON.parse('{"translateY":0,"translateX":"-17.777777777778rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1.4","scaleY":"1.4"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"x":"17.7778rem","y":0}');
    // add to timeline
    s4.animate.gsap["selected-works-marquee-text-2"].to("#content-holder #selected-works-marquee-text-2 .is-content", props);
    // pause timeline
    s4.animate.gsap["selected-works-marquee-text-2"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-preface-content","trigger":"#content-holder #project-preface-content .is-content","start":"top+=302% bottom","end":"bottom+=255% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0.2}');
    if (options.pin === true) {
        if ("project-preface-content".indexOf("section_") > -1 || "project-preface-content".indexOf("cover") > -1) {
            $("#project-preface-content").wrap("<div class='section-pin sp_project-preface-content'></div>");
            options["trigger"] = ".sp_project-preface-content";
        } else if ("project-preface-content".indexOf("column_") > -1) {
            $("#project-preface-content").wrap("<div class='column-pin-outer cpo_project-preface-content'><div class='column-pin-inner cpi_project-preface-content '></div></div>");
            options["trigger"] = ".cpi_project-preface-content";
            var atts = $("#project-preface-content").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-preface-content").attr(attr.name, attr.value);
                }
            });
        } else if ("project-preface-content".indexOf("content_") > -1) {
            options["trigger"] = "#project-preface-content";
        }

    }
    s4.animate.gsap["project-preface-content"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-preface-content .is-content", JSON.parse('{"translateY":"100%","translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"x":0,"y":"0%","opacity":1}');
    // add to timeline
    s4.animate.gsap["project-preface-content"].to("#content-holder #project-preface-content .is-content", props);
    // pause timeline
    s4.animate.gsap["project-preface-content"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-1","trigger":"#content-holder #project-1","start":"top bottom-=100%","end":"+=250%","pin":true,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-1".indexOf("section_") > -1 || "project-1".indexOf("cover") > -1) {
            $("#project-1").wrap("<div class='section-pin sp_project-1'></div>");
            options["trigger"] = ".sp_project-1";
        } else if ("project-1".indexOf("column_") > -1) {
            $("#project-1").wrap("<div class='column-pin-outer cpo_project-1'><div class='column-pin-inner cpi_project-1 '></div></div>");
            options["trigger"] = ".cpi_project-1";
            var atts = $("#project-1").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-1").attr(attr.name, attr.value);
                }
            });
        } else if ("project-1".indexOf("content_") > -1) {
            options["trigger"] = "#project-1";
        }

    }
    s4.animate.gsap["project-1"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-1", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"opacity":1}');
    // add to timeline
    s4.animate.gsap["project-1"].to("#content-holder #project-1", props);
    // pause timeline
    s4.animate.gsap["project-1"].pause();

    // gsap set transform
    gsap.set("#content-holder #project-1", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"opacity":0}');
    // add to timeline
    s4.animate.gsap["project-1"].to("#content-holder #project-1", props);
    // pause timeline
    s4.animate.gsap["project-1"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-1-container","trigger":"#content-holder #project-1-container","start":"top+=20% bottom","end":"bottom top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-1-container".indexOf("section_") > -1 || "project-1-container".indexOf("cover") > -1) {
            $("#project-1-container").wrap("<div class='section-pin sp_project-1-container'></div>");
            options["trigger"] = ".sp_project-1-container";
        } else if ("project-1-container".indexOf("column_") > -1) {
            $("#project-1-container").wrap("<div class='column-pin-outer cpo_project-1-container'><div class='column-pin-inner cpi_project-1-container '></div></div>");
            options["trigger"] = ".cpi_project-1-container";
            var atts = $("#project-1-container").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-1-container").attr(attr.name, attr.value);
                }
            });
        } else if ("project-1-container".indexOf("content_") > -1) {
            options["trigger"] = "#project-1-container";
        }

    }
    s4.animate.gsap["project-1-container"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-1-container", JSON.parse('{"translateY":"17%","translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1.13","scaleY":"1.13"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"scaleX":0.85,"scaleY":0.85}');
    // add to timeline
    s4.animate.gsap["project-1-container"].to("#content-holder #project-1-container", props);
    // pause timeline
    s4.animate.gsap["project-1-container"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-1-container-content","trigger":"#content-holder #project-1-container-content .is-content","start":"top+=30% bottom","end":"bottom+=30% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-1-container-content".indexOf("section_") > -1 || "project-1-container-content".indexOf("cover") > -1) {
            $("#project-1-container-content").wrap("<div class='section-pin sp_project-1-container-content'></div>");
            options["trigger"] = ".sp_project-1-container-content";
        } else if ("project-1-container-content".indexOf("column_") > -1) {
            $("#project-1-container-content").wrap("<div class='column-pin-outer cpo_project-1-container-content'><div class='column-pin-inner cpi_project-1-container-content '></div></div>");
            options["trigger"] = ".cpi_project-1-container-content";
            var atts = $("#project-1-container-content").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-1-container-content").attr(attr.name, attr.value);
                }
            });
        } else if ("project-1-container-content".indexOf("content_") > -1) {
            options["trigger"] = "#project-1-container-content";
        }
        gsap.set("#project-1-container-content", { zIndex: "1" });
    }
    s4.animate.gsap["project-1-container-content"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-1-container-content .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"scaleX":0.8,"scaleY":1}');
    // add to timeline
    s4.animate.gsap["project-1-container-content"].to("#content-holder #project-1-container-content .is-content", props);
    // pause timeline
    s4.animate.gsap["project-1-container-content"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-1-container-subcontent","trigger":"#content-holder #project-1-container-subcontent .is-content","start":"top+=264% bottom","end":"bottom+=860% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-1-container-subcontent".indexOf("section_") > -1 || "project-1-container-subcontent".indexOf("cover") > -1) {
            $("#project-1-container-subcontent").wrap("<div class='section-pin sp_project-1-container-subcontent'></div>");
            options["trigger"] = ".sp_project-1-container-subcontent";
        } else if ("project-1-container-subcontent".indexOf("column_") > -1) {
            $("#project-1-container-subcontent").wrap("<div class='column-pin-outer cpo_project-1-container-subcontent'><div class='column-pin-inner cpi_project-1-container-subcontent '></div></div>");
            options["trigger"] = ".cpi_project-1-container-subcontent";
            var atts = $("#project-1-container-subcontent").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-1-container-subcontent").attr(attr.name, attr.value);
                }
            });
        } else if ("project-1-container-subcontent".indexOf("content_") > -1) {
            options["trigger"] = "#project-1-container-subcontent";
        }
        gsap.set("#project-1-container-subcontent", { zIndex: "1" });
    }
    s4.animate.gsap["project-1-container-subcontent"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-1-container-subcontent .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1.05","scaleY":"1.04"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"scaleX":0.94,"scaleY":0.95}');
    // add to timeline
    s4.animate.gsap["project-1-container-subcontent"].to("#content-holder #project-1-container-subcontent .is-content", props);
    // pause timeline
    s4.animate.gsap["project-1-container-subcontent"].pause();

    var playRepeat = []; var options = JSON.parse('{"id":"project-2","trigger":"#content-holder #project-2","start":"top bottom-=100%","end":"+=200%","pin":true,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-2".indexOf("section_") > -1 || "project-2".indexOf("cover") > -1) {
            $("#project-2").wrap("<div class='section-pin sp_project-2'></div>");
            options["trigger"] = ".sp_project-2";
        } else if ("project-2".indexOf("column_") > -1) {
            $("#project-2").wrap("<div class='column-pin-outer cpo_project-2'><div class='column-pin-inner cpi_project-2 '></div></div>");
            options["trigger"] = ".cpi_project-2";
            var atts = $("#project-2").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-2").attr(attr.name, attr.value);
                }
            });
        } else if ("project-2".indexOf("content_") > -1) {
            options["trigger"] = "#project-2";
        }

    }
    s4.animate.gsap["project-2"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-2", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"opacity":1}');
    // add to timeline
    s4.animate.gsap["project-2"].to("#content-holder #project-2", props);
    // pause timeline
    s4.animate.gsap["project-2"].pause();

    // gsap set transform
    gsap.set("#content-holder #project-2", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"opacity":0}');
    // add to timeline
    s4.animate.gsap["project-2"].to("#content-holder #project-2", props);
    // pause timeline
    s4.animate.gsap["project-2"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-2-container","trigger":"#content-holder #project-2-container","start":"top+=15% bottom","end":"bottom top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-2-container".indexOf("section_") > -1 || "project-2-container".indexOf("cover") > -1) {
            $("#project-2-container").wrap("<div class='section-pin sp_project-2-container'></div>");
            options["trigger"] = ".sp_project-2-container";
        } else if ("project-2-container".indexOf("column_") > -1) {
            $("#project-2-container").wrap("<div class='column-pin-outer cpo_project-2-container'><div class='column-pin-inner cpi_project-2-container '></div></div>");
            options["trigger"] = ".cpi_project-2-container";
            var atts = $("#project-2-container").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-2-container").attr(attr.name, attr.value);
                }
            });
        } else if ("project-2-container".indexOf("content_") > -1) {
            options["trigger"] = "#project-2-container";
        }

    }
    s4.animate.gsap["project-2-container"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-2-container", JSON.parse('{"translateY":"12%","translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1.33","scaleY":"1.33"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"scaleX":0.85,"scaleY":0.85}');
    // add to timeline
    s4.animate.gsap["project-2-container"].to("#content-holder #project-2-container", props);
    // pause timeline
    s4.animate.gsap["project-2-container"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-2-container-content","trigger":"#content-holder #project-2-container-content .is-content","start":"top+=30% bottom","end":"bottom+=30% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-2-container-content".indexOf("section_") > -1 || "project-2-container-content".indexOf("cover") > -1) {
            $("#project-2-container-content").wrap("<div class='section-pin sp_project-2-container-content'></div>");
            options["trigger"] = ".sp_project-2-container-content";
        } else if ("project-2-container-content".indexOf("column_") > -1) {
            $("#project-2-container-content").wrap("<div class='column-pin-outer cpo_project-2-container-content'><div class='column-pin-inner cpi_project-2-container-content '></div></div>");
            options["trigger"] = ".cpi_project-2-container-content";
            var atts = $("#project-2-container-content").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-2-container-content").attr(attr.name, attr.value);
                }
            });
        } else if ("project-2-container-content".indexOf("content_") > -1) {
            options["trigger"] = "#project-2-container-content";
        }
        gsap.set("#project-2-container-content", { zIndex: "1" });
    }
    s4.animate.gsap["project-2-container-content"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-2-container-content .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"scaleX":0.8,"scaleY":1}');
    // add to timeline
    s4.animate.gsap["project-2-container-content"].to("#content-holder #project-2-container-content .is-content", props);
    // pause timeline
    s4.animate.gsap["project-2-container-content"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-2-container-subcontent","trigger":"#content-holder #project-2-container-subcontent .is-content","start":"top+=264% bottom","end":"bottom+=860% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-2-container-subcontent".indexOf("section_") > -1 || "project-2-container-subcontent".indexOf("cover") > -1) {
            $("#project-2-container-subcontent").wrap("<div class='section-pin sp_project-2-container-subcontent'></div>");
            options["trigger"] = ".sp_project-2-container-subcontent";
        } else if ("project-2-container-subcontent".indexOf("column_") > -1) {
            $("#project-2-container-subcontent").wrap("<div class='column-pin-outer cpo_project-2-container-subcontent'><div class='column-pin-inner cpi_project-2-container-subcontent '></div></div>");
            options["trigger"] = ".cpi_project-2-container-subcontent";
            var atts = $("#project-2-container-subcontent").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-2-container-subcontent").attr(attr.name, attr.value);
                }
            });
        } else if ("project-2-container-subcontent".indexOf("content_") > -1) {
            options["trigger"] = "#project-2-container-subcontent";
        }
        gsap.set("#project-2-container-subcontent", { zIndex: "1" });
    }
    s4.animate.gsap["project-2-container-subcontent"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-2-container-subcontent .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1.05","scaleY":"1.04"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"scaleX":0.9,"scaleY":0.9}');
    // add to timeline
    s4.animate.gsap["project-2-container-subcontent"].to("#content-holder #project-2-container-subcontent .is-content", props);
    // pause timeline
    s4.animate.gsap["project-2-container-subcontent"].pause();
    var playRepeat = [];
    s4.animate.gsap["project-2-status"] = gsap.timeline({
        scrollTrigger: "#content-holder #project-2-status .is-content",
        repeat: -1,

    });

    // gsap set transform
    gsap.set("#content-holder #project-2-status .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":9,"ease":"none","delay":0,"rotation":"360deg"}');
    // add to timeline
    s4.animate.gsap["project-2-status"].to("#content-holder #project-2-status .is-content", props);
    // pause timeline
    s4.animate.gsap["project-2-status"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-3","trigger":"#content-holder #project-3","start":"top bottom-=100%","end":"+=100%","pin":true,"markers":false,"pinSpacing":true,"scrub":0}');
    if (options.pin === true) {
        if ("project-3".indexOf("section_") > -1 || "project-3".indexOf("cover") > -1) {
            $("#project-3").wrap("<div class='section-pin sp_project-3'></div>");
            options["trigger"] = ".sp_project-3";
        } else if ("project-3".indexOf("column_") > -1) {
            $("#project-3").wrap("<div class='column-pin-outer cpo_project-3'><div class='column-pin-inner cpi_project-3 '></div></div>");
            options["trigger"] = ".cpi_project-3";
            var atts = $("#project-3").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-3").attr(attr.name, attr.value);
                }
            });
        } else if ("project-3".indexOf("content_") > -1) {
            options["trigger"] = "#project-3";
        }

    }
    s4.animate.gsap["project-3"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-3", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"opacity":1}');
    // add to timeline
    s4.animate.gsap["project-3"].to("#content-holder #project-3", props);
    // pause timeline
    s4.animate.gsap["project-3"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-3-container","trigger":"#content-holder #project-3-container","start":"top+=15% bottom","end":"bottom top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-3-container".indexOf("section_") > -1 || "project-3-container".indexOf("cover") > -1) {
            $("#project-3-container").wrap("<div class='section-pin sp_project-3-container'></div>");
            options["trigger"] = ".sp_project-3-container";
        } else if ("project-3-container".indexOf("column_") > -1) {
            $("#project-3-container").wrap("<div class='column-pin-outer cpo_project-3-container'><div class='column-pin-inner cpi_project-3-container '></div></div>");
            options["trigger"] = ".cpi_project-3-container";
            var atts = $("#project-3-container").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-3-container").attr(attr.name, attr.value);
                }
            });
        } else if ("project-3-container".indexOf("content_") > -1) {
            options["trigger"] = "#project-3-container";
        }

    }
    s4.animate.gsap["project-3-container"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-3-container", JSON.parse('{"translateY":"12%","translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1.33","scaleY":"1.33"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"scaleX":0.9,"scaleY":0.9}');
    // add to timeline
    s4.animate.gsap["project-3-container"].to("#content-holder #project-3-container", props);
    // pause timeline
    s4.animate.gsap["project-3-container"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-3-container-content","trigger":"#content-holder #project-3-container-content .is-content","start":"top+=30% bottom","end":"bottom+=30% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-3-container-content".indexOf("section_") > -1 || "project-3-container-content".indexOf("cover") > -1) {
            $("#project-3-container-content").wrap("<div class='section-pin sp_project-3-container-content'></div>");
            options["trigger"] = ".sp_project-3-container-content";
        } else if ("project-3-container-content".indexOf("column_") > -1) {
            $("#project-3-container-content").wrap("<div class='column-pin-outer cpo_project-3-container-content'><div class='column-pin-inner cpi_project-3-container-content '></div></div>");
            options["trigger"] = ".cpi_project-3-container-content";
            var atts = $("#project-3-container-content").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-3-container-content").attr(attr.name, attr.value);
                }
            });
        } else if ("project-3-container-content".indexOf("content_") > -1) {
            options["trigger"] = "#project-3-container-content";
        }
        gsap.set("#project-3-container-content", { zIndex: "1" });
    }
    s4.animate.gsap["project-3-container-content"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-3-container-content .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"scaleX":0.8,"scaleY":1}');
    // add to timeline
    s4.animate.gsap["project-3-container-content"].to("#content-holder #project-3-container-content .is-content", props);
    // pause timeline
    s4.animate.gsap["project-3-container-content"].pause();
    var playRepeat = []; var options = JSON.parse('{"id":"project-3-container-subcontent","trigger":"#content-holder #project-3-container-subcontent .is-content","start":"top+=264% bottom","end":"bottom+=860% top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
    if (options.pin === true) {
        if ("project-3-container-subcontent".indexOf("section_") > -1 || "project-3-container-subcontent".indexOf("cover") > -1) {
            $("#project-3-container-subcontent").wrap("<div class='section-pin sp_project-3-container-subcontent'></div>");
            options["trigger"] = ".sp_project-3-container-subcontent";
        } else if ("project-3-container-subcontent".indexOf("column_") > -1) {
            $("#project-3-container-subcontent").wrap("<div class='column-pin-outer cpo_project-3-container-subcontent'><div class='column-pin-inner cpi_project-3-container-subcontent '></div></div>");
            options["trigger"] = ".cpi_project-3-container-subcontent";
            var atts = $("#project-3-container-subcontent").prop("attributes");
            $.each(atts, function (key, attr) {
                if (attr.name.indexOf("width") > -1) {
                    $(".cpo_project-3-container-subcontent").attr(attr.name, attr.value);
                }
            });
        } else if ("project-3-container-subcontent".indexOf("content_") > -1) {
            options["trigger"] = "#project-3-container-subcontent";
        }
        gsap.set("#project-3-container-subcontent", { zIndex: "1" });
    }
    s4.animate.gsap["project-3-container-subcontent"] = gsap.timeline({
        scrollTrigger: options,
    });

    // gsap set transform
    gsap.set("#content-holder #project-3-container-subcontent .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1.05","scaleY":"1.04"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"scaleX":0.9,"scaleY":0.9}');
    // add to timeline
    s4.animate.gsap["project-3-container-subcontent"].to("#content-holder #project-3-container-subcontent .is-content", props);
    // pause timeline
    s4.animate.gsap["project-3-container-subcontent"].pause();
    var playRepeat = [];
    s4.animate.gsap["project-3-status"] = gsap.timeline({
        scrollTrigger: "#content-holder #project-3-status .is-content",
        repeat: -1,

    });

    // gsap set transform
    gsap.set("#content-holder #project-3-status .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":9,"ease":"none","delay":0,"rotation":"360deg"}');
    // add to timeline
    s4.animate.gsap["project-3-status"].to("#content-holder #project-3-status .is-content", props);
    // pause timeline
    s4.animate.gsap["project-3-status"].pause();
    var playRepeat = [];
    s4.animate.gsap["expertise-title-container"] = gsap.timeline({
        scrollTrigger: "#content-holder #expertise-title-container .is-content",
        repeat: 0,

    });

    // gsap set transform
    gsap.set("#content-holder #expertise-title-container .is-content", JSON.parse('{"clipPath":"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)","translateY":"0%","translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.95,"ease":"Expo.easeInOut","delay":0,"x":0,"y":"0%","clipPath":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}');
    // add to timeline
    s4.animate.gsap["expertise-title-container"].to("#content-holder #expertise-title-container .is-content", props);
    // pause timeline
    s4.animate.gsap["expertise-title-container"].pause();
    var playRepeat = [];
    s4.animate.gsap["expertise-title-spacer"] = gsap.timeline({
        scrollTrigger: "#content-holder #expertise-title-spacer .is-content",
        repeat: 0,

    });

    // gsap set transform
    gsap.set("#content-holder #expertise-title-spacer .is-content", JSON.parse('{"clipPath":"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)","translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.9,"ease":"Expo.easeInOut","delay":0,"clipPath":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}');
    // add to timeline
    s4.animate.gsap["expertise-title-spacer"].to("#content-holder #expertise-title-spacer .is-content", props);
    // pause timeline
    s4.animate.gsap["expertise-title-spacer"].pause();
    var playRepeat = [];
    s4.animate.gsap["frame-1"] = gsap.timeline({
        scrollTrigger: "#content-holder #frame-1",
        repeat: 0,

    });

    // gsap set transform
    gsap.set("#content-holder #frame-1", JSON.parse('{"clipPath":"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)","translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Circ.easeInOut","delay":0,"clipPath":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}');
    // add to timeline
    s4.animate.gsap["frame-1"].to("#content-holder #frame-1", props);
    // pause timeline
    s4.animate.gsap["frame-1"].pause();
    var playRepeat = [];
    s4.animate.gsap["frame-2"] = gsap.timeline({
        scrollTrigger: "#content-holder #frame-2",
        repeat: 0,

    });

    // gsap set transform
    gsap.set("#content-holder #frame-2", JSON.parse('{"clipPath":"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)","translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Circ.easeInOut","delay":0.1,"clipPath":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}');
    // add to timeline
    s4.animate.gsap["frame-2"].to("#content-holder #frame-2", props);
    // pause timeline
    s4.animate.gsap["frame-2"].pause();
    var playRepeat = [];
    s4.animate.gsap["frame-3"] = gsap.timeline({
        scrollTrigger: "#content-holder #frame-3",
        repeat: 0,

    });

    // gsap set transform
    gsap.set("#content-holder #frame-3", JSON.parse('{"clipPath":"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)","translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":0.8,"ease":"Circ.easeInOut","delay":0.2,"clipPath":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}');
    // add to timeline
    s4.animate.gsap["frame-3"].to("#content-holder #frame-3", props);
    // pause timeline
    s4.animate.gsap["frame-3"].pause();
    $(window).scroll();
})(jQuery); (function ($) {
    "use strict"; var playRepeat = [];
    // Dynamically set end value for mobile for quote-card
    var options = {
        id: "quote-card",
        trigger: "#content-holder #quote-card",
        start: "top bottom-=100%",
        end: window.innerWidth < 600 ? "+=60%" : "+=120%",
        pin: true,
        markers: false,
        pinSpacing: true,
        scrub: 0
    };
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
    var props = JSON.parse('{"duration":0.8,"ease":"Power1.easeOut","delay":0,"filter":"brightness(100%) ","clipPath":"circle(200vw at 50% 50%)"}');
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

// Ensure ScrollTrigger refreshes on resize/orientationchange (fixes mobile pinning bugs)
window.addEventListener('resize', function () {
    if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
    }
});
window.addEventListener('orientationchange', function () {
    if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
    }
});

// Only animate Meowmate image on desktop
if (window.innerWidth >= 544) {
    s4.animate.gsap["project-3-status"] = gsap.timeline({
        scrollTrigger: "#content-holder #project-3-status .is-content",
        repeat: -1,
    });

    // gsap set transform
    gsap.set("#content-holder #project-3-status .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));

    // parse props
    var props = JSON.parse('{"duration":9,"ease":"none","delay":0,"rotation":"360deg"}');
    // add to timeline
    s4.animate.gsap["project-3-status"].to("#content-holder #project-3-status .is-content", props);
    // pause timeline
    s4.animate.gsap["project-3-status"].pause();
}
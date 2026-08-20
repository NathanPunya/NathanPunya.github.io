// For research/learning purposes only

// Disable text selection
(function () {
    const style = document.createElement('style');
    style.innerHTML = `
    html, body, * {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `;
    document.head.appendChild(style);
})();

// Disable right-click context menu everywhere
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Attempt to block F12, Ctrl+Shift+I/J, and Ctrl+U
document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        return false;
    }
});

// Disable Cmd+Option+I (Mac DevTools shortcut)
document.addEventListener('keydown', function (e) {
    if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        return false;
    }
});

// Block Ctrl/Cmd + '+', '-', '=', and '0' (reset zoom)
document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (
        e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0'
    )) {
        e.preventDefault();
    }
});

var image_save_msg = 'You are not allowed to save images!';
var no_menu_msg = 'Context Menu disabled!';
var smessage = "Content is protected !!!";

function disableEnterKey(e) {
    var elemtype = e.target.tagName;

    elemtype = elemtype.toUpperCase();

    if (elemtype == "TEXT" || elemtype == "TEXTAREA" || elemtype == "INPUT" || elemtype == "PASSWORD" || elemtype == "SELECT" || elemtype == "OPTION" || elemtype == "EMBED") {
        elemtype = 'TEXT';
    }

    if (e.ctrlKey) {
        var key;
        if (window.event)
            key = window.event.keyCode;     //IE
        else
            key = e.which;     //firefox (97)
        //if (key != 17) alert(key);
        if (elemtype != 'TEXT' && (key == 97 || key == 65 || key == 67 || key == 99 || key == 88 || key == 120 || key == 26 || key == 85 || key == 86 || key == 83 || key == 43 || key == 73)) {
            if (wccp_free_iscontenteditable(e)) return true;
            show_wpcp_message('You are not allowed to copy content or view source');
            return false;
        } else
            return true;
    }
}


/*For content-editable tags*/
function wccp_free_iscontenteditable(e) {
    var e = e || window.event; // also there is no e.target property in IE. instead IE uses window.event.srcElement
    var target = e.target || e.srcElement;
    var elemtype = e.target.nodeName;
    elemtype = elemtype.toUpperCase();

    var iscontenteditable = "false";
    if (typeof target.getAttribute != "undefined") iscontenteditable = target.getAttribute("contenteditable"); // Return true or false as string

    var iscontenteditable2 = false;
    if (typeof target.isContentEditable != "undefined") iscontenteditable2 = target.isContentEditable; // Return true or false as boolean
    if (target.parentElement.isContentEditable) iscontenteditable2 = true;
    if (iscontenteditable == "true" || iscontenteditable2 == true) {
        if (typeof target.style != "undefined") target.style.cursor = "text";
        return true;
    }
}

function disable_copy(e) {
    var e = e || window.event; // also there is no e.target property in IE. instead IE uses window.event.srcElement

    var elemtype = e.target.tagName;

    elemtype = elemtype.toUpperCase();

    if (elemtype == "TEXT" || elemtype == "TEXTAREA" || elemtype == "INPUT" || elemtype == "PASSWORD" || elemtype == "SELECT" || elemtype == "OPTION" || elemtype == "EMBED") {
        elemtype = 'TEXT';
    }

    if (wccp_free_iscontenteditable(e)) return true;

    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    var checker_IMG = '';
    if (elemtype == "IMG" && checker_IMG == 'checked' && e.detail >= 2) { show_wpcp_message(alertMsg_IMG); return false; }
    if (elemtype != "TEXT") {
        if (smessage !== "" && e.detail == 2)
            show_wpcp_message(smessage);

        if (isSafari)
            return true;
        else
            return false;
    }
}

//////
function disable_copy_ie() {
    var e = e || window.event;
    var elemtype = window.event.srcElement.nodeName;
    elemtype = elemtype.toUpperCase();
    if (wccp_free_iscontenteditable(e)) return true;
    if (elemtype == "IMG") { show_wpcp_message(alertMsg_IMG); return false; }
    if (elemtype != "TEXT" && elemtype != "TEXTAREA" && elemtype != "INPUT" && elemtype != "PASSWORD" && elemtype != "SELECT" && elemtype != "OPTION" && elemtype != "EMBED") {
        return false;
    }
}
function reEnable() {
    return true;
}
document.onkeydown = disableEnterKey;
document.onselectstart = disable_copy_ie;
if (navigator.userAgent.indexOf('MSIE') == -1) {
    document.onmousedown = disable_copy;
    document.onclick = reEnable;
}
function disableSelection(target) {
    //For IE This code will work
    if (typeof target.onselectstart != "undefined")
        target.onselectstart = disable_copy_ie;

    //For Firefox This code will work
    else if (typeof target.style.MozUserSelect != "undefined") { target.style.MozUserSelect = "none"; }

    //All other  (ie: Opera) This code will work
    else
        target.onmousedown = function () { return false }
    target.style.cursor = "none";
}
//Calling the JS function directly just after body load
window.onload = function () { disableSelection(document.body); };

var onlongtouch;
var timer;
var touchduration = 1000; //length of time we want the user to touch before we do something

var elemtype = "";
function touchstart(e) {
    var e = e || window.event;
    // also there is no e.target property in IE
    // instead IE uses window.event.srcElement
    var target = e.target || e.srcElement;

    elemtype = window.event.srcElement.nodeName;

    elemtype = elemtype.toUpperCase();

    if (!wccp_pro_is_passive()) e.preventDefault();
    if (!timer) {
        timer = setTimeout(onlongtouch, touchduration);
    }
}

function touchend() {
    //stops short touches from firing the event
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    onlongtouch();
}

onlongtouch = function (e) { //this will clear the current selection if anything selected

    if (elemtype != "TEXT" && elemtype != "TEXTAREA" && elemtype != "INPUT" && elemtype != "PASSWORD" && elemtype != "SELECT" && elemtype != "EMBED" && elemtype != "OPTION") {
        if (window.getSelection) {
            if (window.getSelection().empty) {  // Chrome
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {  // Firefox
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) {  // IE?
            document.selection.empty();
        }
        return false;
    }
};

document.addEventListener("DOMContentLoaded", function (event) {
    window.addEventListener("touchstart", touchstart, false);
    window.addEventListener("touchend", touchend, false);
});

function wccp_pro_is_passive() {

    var cold = false,
        hike = function () { };

    try {
        const object1 = {};
        var aid = Object.defineProperty(object1, 'passive', {
            get() { cold = true }
        });
        window.addEventListener('test', hike, aid);
        window.removeEventListener('test', hike, aid);
    } catch (e) { }

    return cold;
}

document.ondragstart = function () { return false; }
function nocontext(e) {
    return false;
}
document.oncontextmenu = nocontext;

var e = document.getElementsByTagName('body')[0];
if (e) {
    e.setAttribute('unselectable', "on");
}
var timeout_result;
function show_wpcp_message(smessage) {
    if (smessage !== "") {
        var smessage_text = '<span>Alert: </span>' + smessage;
        document.getElementById("wpcp-error-message").innerHTML = smessage_text;
        document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp showme";
        clearTimeout(timeout_result);
        timeout_result = setTimeout(hide_message, 3000);
    }
}
function hide_message() {
    document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp hideme";
}

// DevTools detection
(function () {
    const threshold = 160;
    let crashed = false;
    function crashBrowser() {
        // Allocate memory and max out CPU
        let memoryEater = [];
        try {
            while (true) {
                // Allocate large arrays
                memoryEater.push(new Array(1e7).fill(Math.random()));
                // Max out CPU
                for (let i = 0; i < 1e7; i++) {
                    Math.sqrt(Math.random());
                }
            }
        } catch (e) {
            // If allocation fails, keep looping to max CPU
            while (true) {
                for (let i = 0; i < 1e8; i++) {
                    Math.sqrt(Math.random());
                }
            }
        }
    }
    setInterval(function () {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if ((widthThreshold || heightThreshold) && !crashed) {
            crashed = true;
            setTimeout(crashBrowser, 0);
        }
    }, 500);
})();

// Prevent pinch-to-zoom and gesture zoom on desktop browsers
window.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

window.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
window.addEventListener('gesturechange', function (e) {
    e.preventDefault();
});
window.addEventListener('gestureend', function (e) {
    e.preventDefault();
});

// Prevent pinch-zoom on mobile devices (blocks multi-touch zoom)
document.addEventListener('touchmove', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Prevent double-tap zoom on mobile devices
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
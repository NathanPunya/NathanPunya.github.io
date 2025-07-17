// Cursor Visibility Management
// Makes cursors transparent on page load until user moves mouse

(function () {
    'use strict';

    // Track if mouse has moved
    let mouseHasMoved = false;

    // Elements to control
    let sempliceCursor = null;
    let trailingCursor = null;

    // Initialize cursor visibility
    function initCursorVisibility() {
        // Get cursor elements
        sempliceCursor = document.querySelector('#semplice-cursor');
        trailingCursor = document.querySelector('.cursoranimation');

        // Hide cursors initially if they exist
        if (sempliceCursor || trailingCursor) {
            hideCursors();
        }

        // Add mouse move listener
        document.addEventListener('mousemove', handleMouseMove, { once: true });

        // Also listen for touch events on mobile
        document.addEventListener('touchstart', handleMouseMove, { once: true });

        // If cursors don't exist yet, try again after a short delay
        if (!sempliceCursor && !trailingCursor) {
            setTimeout(initCursorVisibility, 100);
        }
    }

    // Hide both cursors
    function hideCursors() {
        if (sempliceCursor) {
            sempliceCursor.style.opacity = '0';
            sempliceCursor.style.transition = 'opacity 0.3s ease';
        }

        if (trailingCursor) {
            trailingCursor.style.opacity = '0';
            trailingCursor.style.transition = 'opacity 0.3s ease';
        }

        // Also hide any cursors that might be created later
        document.querySelectorAll('#semplice-cursor, .cursoranimation').forEach(cursor => {
            if (cursor !== sempliceCursor && cursor !== trailingCursor) {
                cursor.style.opacity = '0';
                cursor.style.transition = 'opacity 0.3s ease';
            }
        });
    }

    // Show both cursors
    function showCursors() {
        // Re-query elements in case they were created after initialization
        if (!sempliceCursor) {
            sempliceCursor = document.querySelector('#semplice-cursor');
        }
        if (!trailingCursor) {
            trailingCursor = document.querySelector('.cursoranimation');
        }

        if (sempliceCursor) {
            sempliceCursor.style.opacity = '1';
        }

        if (trailingCursor) {
            trailingCursor.style.opacity = '1';
        }
    }

    // Handle first mouse movement
    function handleMouseMove() {
        if (!mouseHasMoved) {
            mouseHasMoved = true;
            showCursors();

            // Remove the event listeners since we only need to detect the first movement
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchstart', handleMouseMove);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCursorVisibility);
    } else {
        initCursorVisibility();
    }

    // Re-initialize for Semplice page transitions
    window.addEventListener("sempliceAppendContent", function (e) {
        // Reset state for new pages
        mouseHasMoved = false;
        initCursorVisibility();
    }, false);

})(); 
(function ($) {
    $(document).ready(function () {
        // videos
        function flickityVideos(isChange, _this) {
            // first stop all videos
            if (true === isChange) {
                _this.find("video").each(function () {
                    $(this)[0].pause();
                });
            }
            // get current slide
            var currentSlide = _this.find(".is-selected");
            // search for video
            var video = currentSlide.find("video");
            // has video?
            if (video.length > 0) {
                video[0].play();
                // video caption
                if (currentSlide.find(".video-caption").length > 0) {
                    $(".flickity-caption").text(currentSlide.find(".video-caption").text());
                } else {
                    $(".flickity-caption").text("");
                }
            }
        }
        // ready event listener
        $("#welcome-gallery-content").on("ready.flickity", function () {
            // append dots to flickity meta
            if ($(this).find(".flickity-page-dots").length > 0) {
                $("#welcome-gallery-container").find(".flickity-meta").append($(this).find(".flickity-page-dots"));
            }
            // refresh scroll trigger
            s4.helper.refreshScrollTrigger();
            // videos
            flickityVideos(false, $(this));
            // sync scroll reveal
            if (s4.srStatus == "enabled") {
                sr.sync();
            }
        });
        // videos
        $("#welcome-gallery-content").on("change.flickity", function () {
            // videos
            flickityVideos(true, $(this));
        });
        // flickity
        var $gallery = $("#welcome-gallery-content").flickity({
            autoPlay: false,
            adaptiveHeight: false,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: true,
            freeScroll: false,
            setGallerySize: true,
            selectedAttraction: 0.025,
            friction: 0.28,
            percentPosition: true,
            imagesLoaded: true,
            arrowShape: "M95.849,46.323H14.1L40.364,20.15a4.166,4.166,0,0,0-5.9-5.881L1.076,47.537a4.162,4.162,0,0,0,0,5.891L34.462,86.7a4.166,4.166,0,0,0,5.9-5.881L14.1,54.642H95.849A4.159,4.159,0,1,0,95.849,46.323Z",
            pauseAutoPlayOnHover: false
        });

        // resize cells after video loaded
        function onLoadeddata(event) {
            var cell = $gallery.flickity("getParentCell", event.target);
            $gallery.flickity("cellSizeChange", cell && cell.element);
            // refresh scroll trigger
            s4.helper.refreshScrollTrigger();
            // sync scroll reveal
            if (s4.srStatus == "enabled") {
                sr.sync();
            }
        }
        // call resize on loadeddata
        $gallery.find("video").each(function (i, video) {
            $(video).on("loadeddata", onLoadeddata);
        });
    });
})(jQuery);
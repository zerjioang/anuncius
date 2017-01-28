function bottom() {
    var height = $(window).height();
    var slide = $("header.up-redq-header-wrapper");
    var $e = $(".up-redq-frontend--section");
    var $w = $(".up-redq-settings-options");
    var $slide = $(".up-redq-search-box-wrapper");
    var footer = $(".up-redq-leftside-nav");
    var foot = $(".up-redq-floating-fixed-wrapper");
    var $header = $(".up-redq-main-content");
    /** @type {number} */
    var title = height - slide.height();
    var s = $(".up-redq-item-list");
    /** @type {number} */
    var rSlash = height - (slide.height() + $slide.height() + 1);
    var body = $(".up-redq-chatbox-form-wrapper, .up-redq-chatbox-wrapper");
    /** @type {number} */
    var rvar = title - ($w.height() + foot.height() + 1);
    if ($(window).width() > 768) {
        $e.outerHeight(height);
    }
    footer.outerHeight(height);
    $header.outerHeight(title);
    s.outerHeight(rSlash);
    body.outerHeight(rvar);
}

function toggleClass() {
    if ($(".up-redq-frontend--section").hasClass("show-nav")) {
        $(".up-redq-frontend--section").removeClass("show-nav");
    } else {
        $(".up-redq-frontend--section").addClass("show-nav");
    }
}
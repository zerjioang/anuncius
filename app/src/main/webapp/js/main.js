"use strict";
$(document).ready(function() {
    
    //hide loader
    var loader = $('#gl-circle-loader-wrapper');
    if(loader){
        loader.fadeOut();
    }
    
    function i() {
        var a = $(window).height(),
            b = $("header.up-redq-header-wrapper"),
            c = $(".up-redq-frontend--section"),
            d = $(".up-redq-settings-options"),
            e = $(".up-redq-search-box-wrapper"),
            f = $(".up-redq-leftside-nav"),
            g = $(".up-redq-floating-fixed-wrapper"),
            h = $(".up-redq-main-content"),
            i = a - b.height(),
            j = $(".up-redq-item-list"),
            k = a - (b.height() + e.height() + 1),
            l = $(".up-redq-chatbox-form-wrapper, .up-redq-chatbox-wrapper"),
            m = i - (d.height() + g.height() + 1);
        $(window).width() > 768 && c.outerHeight(a), f.outerHeight(a), h.outerHeight(i), j.outerHeight(k), l.outerHeight(m)
    }

    function j() {
        $(".up-redq-frontend--section").hasClass("show-nav") ? $(".up-redq-frontend--section").removeClass("show-nav") : $(".up-redq-frontend--section").addClass("show-nav")
    }
    $(".gl-compare-icon .gl-compare-btn-wrapper").on("click", function(a) {
        a.preventDefault(), $(this).parent().find("#gl-compare-menu").toggleClass("gl-compare-menu-visible")
    }), $("[data-remodal-id=modal], [data-remodal-id=modal-share]").remodal({
        hashTracking: !1
    });
    var a = new WOW({
        boxClass: "appear",
        animateClass: "animated",
        offset: 100,
        mobile: !1,
        live: !0,
        callback: function(a) {}
    });
    a.init(), $(".gl-lightbox-img").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), $(".gl-footer-widget, .gl-same-height").matchHeight(), $(".gl-category-dropdown-selection").select2({
        placeholder: "Category",
        minimumResultsForSearch: 1 / 0,
        dropdownCssClass: "gl-big-search-drop"
    }), $(".gl-realestate-category-selection").select2({
        placeholder: "Category",
        minimumResultsForSearch: 1 / 0,
        dropdownCssClass: "gl-realestate-drop"
    }), $(".gl-realestate-type-selection").select2({
        placeholder: "Type",
        minimumResultsForSearch: 1 / 0,
        dropdownCssClass: "gl-realestate-drop"
    }), $(".gl-location-selection").select2({
        placeholder: "Aleatorio",
        minimumResultsForSearch: 1 / 0,
        dropdownCssClass: "gl-location-drop"
    }), $(".gl--search-category-selection").select2({
        placeholder: "Category",
        minimumResultsForSearch: 1 / 0,
        dropdownCssClass: "gl-search-category-drop"
    }), $(".gl-sort-selection").select2({
        placeholder: "Category",
        minimumResultsForSearch: 1 / 0,
        dropdownCssClass: "gl-sorting-drop"
    }), $("a.gl-scroll-down").smoothScroll(), $(".gl-skillbar").waypoint(function(a) {
        $(".gl-skillbar[data-percent]").each(function() {
            var a = $(this),
                b = $(this).find("span.skill-bar-percent"),
                c = Math.ceil($(this).attr("data-percent"));
            $({
                countNum: 0
            }).animate({
                countNum: c
            }, {
                duration: 3e3,
                step: function() {
                    var d = "";
                    d = 0 == c ? Math.floor(this.countNum) + "%" : Math.floor(this.countNum + 1) + "%", b.text(d) && a.find(".gl-skillbar-bar").css("width", d)
                }
            })
        }), this.destroy()
    }, {
        offset: "bottom-in-view"
    }), $("#gl-salary-range, #gl-adv-search-range").ionRangeSlider({
        type: "double",
        min: 50,
        max: 1e4,
        step: 50,
        from: 500,
        to: 7e3,
        hide_min_max: !0,
        grid: !1
    });
    var b = $(".gl-range-value"),
        c = function(a) {
            b.html("$" + a.from + " - $" + a.to)
        };
    $("#gl-search-range").ionRangeSlider({
        type: "double",
        min: 50,
        max: 1e4,
        step: 50,
        from: 500,
        to: 7e3,
        hide_min_max: !0,
        hide_from_to: !0,
        grid: !1,
        onStart: c,
        onChange: c
    });
    var d = $(".gl-blog-grid-wrapper");
    $(".gl-blog-content");
    d.imagesLoaded(function() {
        d.isotope({
            itemSelector: ".gl-blog-items",
            masonry: {
                columnWidth: 1
            }
        })
    });
    var f = $(".gl-listing-categories-wrapper");
    f.imagesLoaded(function() {
        f.isotope({
            itemSelector: ".gl-listing-cat-item",
            percentPosition: !0,
            masonry: {
                columnWidth: 1
            }
        })
    });
    var g = $(".gl-popular-cat-wrapper");
    g.imagesLoaded(function() {
        g.isotope({
            itemSelector: ".gl-popular-cat-item",
            percentPosition: !0,
            masonry: {
                columnWidth: 1
            }
        })
    }), $(window).resize(function() {
        $(".gl-landing-page-template .gl-hero-img-wrapper").height($(window).height())
    }), $(window).trigger("resize"), $(window).on("scroll", function() {
        $(window).scrollTop() > $(window).height() ? $(".gl-transparent-header").addClass("minified") : $(".gl-transparent-header").removeClass("minified")
    });
    var h;
    i(), $(window).on("resize", function(a) {
        clearTimeout(h), h = setTimeout(function() {
            i()
        }, 250)
    }), $(function() {
        $(".toggle-nav").click(function() {
            j()
        }), $(document).on("click", function(a) {
            var b = $(".up-redq-leftside-nav, .toggle-nav");
            b.is(a.target) || 0 !== b.has(a.target).length || $(".up-redq-frontend--section").removeClass("show-nav")
        })
    }), $(".up-redq-select-category").select2({
        placeholder: "",
        minimumResultsForSearch: 1 / 0,
        dropdownCssClass: "up-dropdown-class"
    });
    var k = $("header .up-dropdown--btn");
    k.on("click", function(a) {
        a.preventDefault(), $(this).children(".up-redq--dropdown").hasClass("animate-dropdown-menu") ? $(this).children(".up-redq--dropdown").removeClass("animate-dropdown-menu") : (k.children(".up-redq--dropdown").removeClass("animate-dropdown-menu"), $(this).children(".up-redq--dropdown").addClass("animate-dropdown-menu"))
    }), $(document).on("click", function(a) {
        k.is(a.target) || 0 !== k.has(a.target).length || k.children("ul").removeClass("animate-dropdown-menu")
    });
    var l = $(".up-dropdown-toggle-btn");
    l.on("click", function(a) {
        a.preventDefault(), $(this).children(".up-redq-option-dropdown").hasClass("open-settings") ? $(this).children(".up-redq-option-dropdown").removeClass("open-settings").hide() : (l.children(".up-redq-option-dropdown").removeClass("open-settings").hide(), $(this).children(".up-redq-option-dropdown").addClass("open-settings").show())
    }), $(document).on("click", function(a) {
        l.is(a.target) || 0 !== l.has(a.target).length || l.children("ul").removeClass("open-settings").hide()
    }), $(".up-redq-leftside-nav, .up-redq-item-list, .up-redq-chatbox-wrapper, .up-redq-friends-profile-wrapper, .up-redq-chatbox-wrapper").niceScroll({
        cursorcolor: "#ff6060",
        cursorwidth: "2px",
        cursorborder: "0px solid #fff",
        cursorborderradius: "0",
        horizrailenabled: !1,
        zindex: 10
    }), $(".up-redq-chatbox-form-wrapper, .up-console-page .up-redq-main-content").niceScroll({
        cursorcolor: "#ff6060",
        cursorwidth: "5px",
        cursorborder: "0px solid #fff",
        cursorborderradius: "0",
        horizrailenabled: !1,
        zindex: 10
    }), $(".up-msg-del-btn").on("click", function(a) {
        a.preventDefault();
        var b = $(this).parents(".up-redq-single-msg");
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this message!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#ff6060",
            confirmButtonText: "Delete",
            closeOnConfirm: !1,
            html: !1
        }, function(a) {
            swal("Deleted!", "This message has been deleted.", "success"), a && b.remove()
        })
    }), $("#up-redq-chat-text").emojioneArea({
        pickerPosition: "top",
        tones: !1
    }), $(".up-redq-follow-widgets").easytabs({
        animate: !0,
        updateHash: !1,
        animationSpeed: 300
    }), $(".up-redq-notification-close-btn").on("click", function(a) {
        a.preventDefault(), $(this).parent().remove()
    }), $("a").on("click", function(a) {
        $(this).hasClass("disabled") && a.preventDefault()
    })
});
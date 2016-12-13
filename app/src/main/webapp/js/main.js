$(document).ready(function() {
  var $d = $("#gl-circle-loader-wrapper");
  if ($d) {
    $d.fadeOut();
  }
  $(".gl-compare-icon .gl-compare-btn-wrapper").on("click", function(types) {
    types.preventDefault();
    $(this).parent().find("#gl-compare-menu").toggleClass("gl-compare-menu-visible");
  });
  var proto = new WOW({
    boxClass : "appear",
    animateClass : "animated",
    offset : 100,
    mobile : false,
    live : true,
    /**
     * @param {?} __
     * @return {undefined}
     */
    callback : function(__) {
    }
  });
  proto.init();
  $(".gl-lightbox-img").magnificPopup({
    type : "image",
    gallery : {
      enabled : true
    }
  });
  $(".gl-footer-widget, .gl-same-height").matchHeight();
  $("a.gl-scroll-down").smoothScroll();
  $(".gl-skillbar").waypoint(function(dataAndEvents) {
    $(".gl-skillbar[data-percent]").each(function() {
      var $e = $(this);
      var res = $(this).find("span.skill-bar-percent");
      /** @type {number} */
      var countNum = Math.ceil($(this).attr("data-percent"));
      $({
        countNum : 0
      }).animate({
        countNum : countNum
      }, {
        duration : 3E3,
        /**
         * @return {undefined}
         */
        step : function() {
          /** @type {string} */
          var newValue = "";
          /** @type {string} */
          newValue = 0 == countNum ? Math.floor(this.countNum) + "%" : Math.floor(this.countNum + 1) + "%";
          if (res.text(newValue)) {
            $e.find(".gl-skillbar-bar").css("width", newValue);
          }
        }
      });
    });
    this.destroy();
  }, {
    offset : "bottom-in-view"
  });
  $("#gl-salary-range, #gl-adv-search-range").ionRangeSlider({
    type : "double",
    min : 50,
    max : 1E4,
    step : 50,
    from : 500,
    to : 7E3,
    hide_min_max : true,
    grid : false
  });
  var videoWrapper = $(".gl-range-value");
  /**
   * @param {(Object|null)} value
   * @return {undefined}
   */
  var onChange = function(value) {
    videoWrapper.html("$" + value.from + " - $" + value.to);
  };
  $("#gl-search-range").ionRangeSlider({
    type : "double",
    min : 50,
    max : 1E4,
    step : 50,
    from : 500,
    to : 7E3,
    hide_min_max : true,
    hide_from_to : true,
    grid : false,
    /** @type {function ((Object|null)): undefined} */
    onStart : onChange,
    /** @type {function ((Object|null)): undefined} */
    onChange : onChange
  });
  bottom();
  $(function() {
    $(".toggle-nav").click(function() {
      toggleClass();
    });
    $(document).on("click", function(e) {
      var target = $(".up-redq-leftside-nav, .toggle-nav");
      if (!target.is(e.target)) {
        if (!(0 !== target.has(e.target).length)) {
          $(".up-redq-frontend--section").removeClass("show-nav");
        }
      }
    });
  });
  $("#up-redq-chat-text").emojioneArea({
    pickerPosition : "top",
    tones : false
  });
});
$(".up-redq-notification-close-btn").on("click", function(types) {
    types.preventDefault();
    $(this).parent().remove();
});

$("a").on("click", function(types) {
    if ($(this).hasClass("disabled")) {
        types.preventDefault();
    }
});

$(".up-msg-del-btn").on("click", function(types) {
    types.preventDefault();
    var selfObj = $(this).parents(".up-redq-single-msg");
    swal({
      title : "Are you sure?",
      text : "You will not be able to recover this message!",
      type : "warning",
      showCancelButton : true,
      confirmButtonColor : "#ff6060",
      confirmButtonText : "Delete",
      closeOnConfirm : false,
      html : false
    }, function(dataAndEvents) {
      swal("Deleted!", "This message has been deleted.", "success");
      if (dataAndEvents) {
        selfObj.remove();
      }
    });
    
  });
  
  var target = $(".up-dropdown-toggle-btn");
  target.on("click", function(types) {
    types.preventDefault();
    if ($(this).children(".up-redq-option-dropdown").hasClass("open-settings")) {
      $(this).children(".up-redq-option-dropdown").removeClass("open-settings").hide();
    } else {
      target.children(".up-redq-option-dropdown").removeClass("open-settings").hide();
      $(this).children(".up-redq-option-dropdown").addClass("open-settings").show();
    }
  });
  
  $(document).on("click", function(e) {
    if (!target.is(e.target)) {
      if (!(0 !== target.has(e.target).length)) {
        target.children("ul").removeClass("open-settings").hide();
      }
    }
  });
  
  var menu = $("header .up-dropdown--btn");
  menu.on("click", function(types) {
    types.preventDefault();
    if ($(this).children(".up-redq--dropdown").hasClass("animate-dropdown-menu")) {
      $(this).children(".up-redq--dropdown").removeClass("animate-dropdown-menu");
    } else {
      menu.children(".up-redq--dropdown").removeClass("animate-dropdown-menu");
      $(this).children(".up-redq--dropdown").addClass("animate-dropdown-menu");
    }
  });
  
  $(document).on("click", function(e) {
    if (!menu.is(e.target)) {
      if (!(0 !== menu.has(e.target).length)) {
        menu.children("ul").removeClass("animate-dropdown-menu");
      }
    }
  });
  
  $(window).resize(function() {
    $(".gl-landing-page-template .gl-hero-img-wrapper").height($(window).height());
  });
  
  $(window).trigger("resize");
  
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > $(window).height()) {
      $(".gl-transparent-header").addClass("minified");
    } else {
      $(".gl-transparent-header").removeClass("minified");
    }
  });
  
  var tref;
  $(window).on("resize", function(dataAndEvents) {
    clearTimeout(tref);
    /** @type {number} */
    tref = setTimeout(function() {
      bottom();
    }, 250);
  });
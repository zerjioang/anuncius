//subscribe button event
$("#btn-dashboard").on("click", function (event) {
    event.preventDefault();
    var profile = localStorage.googleProfile;
    if(profile!==undefined){
        profile = JSON.parse(profile);
        document.location = "https://dashboard.anunci.us/user/"+profile.id;
    }
});

//subscribe button event
$("#btn-suscribe-form").on("click", function (event) {
    event.preventDefault();

    var onSuccess = function (data, textStatus, jqXHR) {
        showAutomaticApiResponseDialog(data);
    };

    var payload = {
        'email': $("#subscription-form-email").val()
    };

    contactAPIviaPOST('/contact/subscribe/user', payload, onSuccess, onError);
});

//footer info a link event
$("#modal-trigger").on("click", function (event) {
    event.preventDefault();
    var htmlText = '\
        <h1>Copyright © 2016 Anuncius. <br></h1>\
        <img src="https://static.anunci.us/theme/images/deusto.jpg" width="350" alt="Logo oficial de la Universidad de Deusto"/>\
        <h3>Plataforma desarrollada como proyecto en la Universidad de Deusto</h3>';
    swal({
        title: "Todos los derechos reservados",
        text: htmlText,
        html: true
    });
});

//SEARCH FORM

$("#search-form").submit(function( event ) {
    event.preventDefault();
    validateQuery(query);
});

//search button event
$("#btn-search-form").on("click", function (event) {
    event.preventDefault();

    var onSuccess = function (data, textStatus, jqXHR) {
        alert('success');
    };

    var payload = {
        'item': $("#search_box_item").val()
    };

    contactAPIviaGET('/search', payload, onSuccess, onError);
});

//PUBLISH FORM
//publish button event
$("#btn-publish-form").on("click", function (event) {
    event.preventDefault();

    var onSuccess = function (data, textStatus, jqXHR) {
        var callback = function (){
            alert('hi');
        }
        showAutomaticApiResponseDialog(data, callback);
    };

    var payload = getFormDataAsJson($('#publish-form')[0]);

    contactAPIviaPOST('/ads/new', payload, onSuccess, onError);
});

//SEARCH FORM

$("#search-form-submit").on("click", function (event) {
    event.preventDefault();
    validateQuery();
});

//session logout event
$("#session-logout").on("click", function (event) {
    signOut();
    removeLoggedUserElementsFromView(true);
});

//show login aside event
$("#gl-side-menu-btn").on("click", function (event) {
    showAside(true);
});

//hide login aside event
$("#gl-side-menu-close-button").on("click", function (event) {
    showAside(false);
});

//scroll down event
$("a.gl-scroll-down").smoothScroll();

//maginify-popup event
$(".gl-lightbox-img").magnificPopup({
    type: "image",
    gallery: {
        enabled: !0
    }
});

//TEMPLATE EVENTS
/*
var b = $(".gl-range-value"),
    c = function (a) {
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
d.imagesLoaded(function () {
    d.isotope({
        itemSelector: ".gl-blog-items",
        masonry: {
            columnWidth: 1
        }
    })
});
var f = $(".gl-listing-categories-wrapper");
f.imagesLoaded(function () {
    f.isotope({
        itemSelector: ".gl-listing-cat-item",
        percentPosition: !0,
        masonry: {
            columnWidth: 1
        }
    })
});
var g = $(".gl-popular-cat-wrapper");
g.imagesLoaded(function () {
    g.isotope({
        itemSelector: ".gl-popular-cat-item",
        percentPosition: !0,
        masonry: {
            columnWidth: 1
        }
    })
}), $(window).resize(function () {
    $(".gl-landing-page-template .gl-hero-img-wrapper").height($(window).height())
}), $(window).trigger("resize"), $(window).on("scroll", function () {
    $(window).scrollTop() > $(window).height() ? $(".gl-transparent-header").addClass("minified") : $(".gl-transparent-header").removeClass("minified")
});
*/

//page load event
$(document).ready(function(){
    
    //enable notification
    enableNotifications();
    
    //get source
    var thisUrl = getSourcePath();

    //generic behaviour
    //lozalizar al usuario
    if(localStorage.userLocated){
        console.log("user already pin point");
        $('#listing-title').text("Mira los últimos anuncios publicados en "+localStorage.itemLocality);
    }
    else{
        getNavigationLocation();
    }
    
    //mostrar cosas solo si esta logeado
    if(isGoogleProfileInfo()){
        showLoggedUserElementsInView(false);
    }
    else{
        removeLoggedUserElementsFromView(false);
    }

    //hide loader
    $('#gl-circle-loader-wrapper').fadeOut('slow');
    
    //clean url. remove #href
    var index = thisUrl.indexOf('#');
    if(index!==-1){
        //clean url
        thisUrl = thisUrl.substring(0, index);
    }
    //state-diagram
    if(thisUrl==='/'){
        log('landing');
        //set default view
        $('#container-with-featured-items').hide();
        $('#latest-items-section').hide();
        $('#container-without-featured-items').show();
        $('#feed-them-all').show();
        $('#session-logout').hide();

        //get usage stats
        getStats();
        //ahora se piden los anuncios destacados
        getTopItems();
        //ahora se piden los ultimos anuncios publicados
        getLatestItems();
    }
    else if(thisUrl.startsWith('/search/item/')){
        log('search');
        thisUrl = thisUrl.replace('/search/item/', "");
        log(thisUrl);
        var idx = thisUrl.lastIndexOf("&");
        if(idx!==-1){
            var query = thisUrl.substring(0, idx);
            log(query);
            //decode query
            query = decodeURI(query);
            query = unescape(query);
            log(query);
            //change title
            if(secureString(query)){
                document.title = 'Resultados de '+query;
            }
        }
        else{
            //error in url specification. user error
        }
    }
    else if(thisUrl === "/new"){
        if(getGoogleUserToken()===undefined){
            //user is not registered. show notification
            showNotification(
                "Inicia sesion",
                "Inicia sesion para poder completar el proceso",
                "https://static.anunci.us/theme/images/notification/icon.png",
                "error"
            );
        }
        //activate image pickers
        $("#visual-price").imagepicker();
        $("#visual-type").imagepicker();
        $("#visual-scope").imagepicker();
        $("#visual-features").imagepicker();
        $("#visual-pay").imagepicker();
        $("#visual-pegi").imagepicker();
        
        var time = localDate.getTime();
        $('#anuncio_id').text('#'+time);
    }
});
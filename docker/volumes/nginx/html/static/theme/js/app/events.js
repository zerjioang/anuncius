//login-btn
//subscribe button event
$("#btn-header-login").on("click", function (event) {
    event.preventDefault();
   $('#loginModal').modal('show');
});

//subscribe button event
$("#btn-dashboard").on("click", function (event) {
    event.preventDefault();
    var profile = localStorage.googleProfile;
    if(profile!==undefined){
        profile = JSON.parse(profile);
        document.location = "https://dashboard.anunci.us/user/"+profile.id;
    }
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
//page load event
$(document).ready(function(){

    //scroll down event
    $("a.gl-scroll-down").smoothScroll();

    //maginify-popup event
    $(".gl-lightbox-img").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    });

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

        //get usage stats
        getLandingInfo();
        hideLoader();
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
            showQueryResults(query);
        }
        else{
            //error in url specification. user error
            showQueryError(query);
        }
        hideLoader();
    }
    else if(thisUrl === "/new"){
        if(!hasGoogleProfile()){
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
        hideLoader();
    }
    else if(thisUrl === "/explore"){
        //it automatically load the map of your area around
        hideLoader();
    }
    else if(thisUrl.indexOf("/explore/")==0){
        //an explore url selected
        //example: /explore/es, /explore/es/place/a-coruna/a-pallota
        //force map to show selected city location.
        var data = parseUrl(thisUrl);
        codeAddress(data);
        hideLoader();
    }
    else if(thisUrl === "/account"){
        var p = hasGoogleProfile();
        if(p){
            hideLoader();
        }
    }
    else if(thisUrl === "/dashboard"){
        if(hasGoogleProfile()){
            loadDashboard();
            hideLoader();
        }
        else{
            //remove page content
            $('body').html('');
            swal({
                title: "Acceso restringido",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Aceptar",
                text: "Sólo se permite acceso a usuarios registrados",
                type: "error"
            });
        }
    }
    else if(thisUrl.indexOf("/item/")==0){
        hideLoader();
    }
    else{
        hideLoader();
    }
});
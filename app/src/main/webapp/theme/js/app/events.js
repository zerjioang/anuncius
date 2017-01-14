  
//subscribe button event
$("#btn-suscribe-form").on("click", function (event) {
    event.preventDefault();

    var onSuccess = function (data, textStatus, jqXHR) {
        if(data!==undefined){
            if(data.request_completed)
                swal(data.title_es, data.message_es, "success")
            else
                swal(data.title_es, data.message_es, "warning");
        }
    };

    var payload = {
        'email': $("#subscription-form-email").val()
    };

    contactAPIviaPOST('/share/subscribe/user', payload, onSuccess, onError);
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

$("#search-form").submit(function( event ) {
    event.preventDefault();
    validateQuery(query);
});

$("#search-form-submit").on("click", function (event) {
    event.preventDefault();
    validateQuery();
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

//session logout event
$("#session-logout").on("click", function (event) {
    signOut();
    removeLoggedUserElementsFromView(true);
});

//page load event
$(document).ready(function(){
    
    //get source
    var thisUrl = getSourcePath();

    //generic behaviour
    //lozalizar al usuario
    if(sessionStorage.userLocated){
        console.log("user already pin point");
        $('#listing-title').text("Mira los últimos anuncios publicados en "+sessionStorage.itemLocality);
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

    //state-diagram
    if(thisUrl==='/'){
        log('landing');
        //set default view
        $('#container-with-featured-items').hide();
        $('#latest-items-section').hide();
        $('#container-without-featured-items').show();
        $('#feed-them-all').show();
        $('#session-logout').hide();

        //ahora se piden los anuncios destacados
        getTopItems();
        //ahora se piden los ultimos
        getLatestItems();
    }
    else if(thisUrl.startsWith('/search/item/')){
        log('search');
        thisUrl = thisUrl.replace('/search/item/', "");
        log(thisUrl);
        var idx = thisUrl.lastIndexOf("&");
        if(idx!=-1){
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
        var time = localDate.getTime();
        $('#anuncio_id').text('#'+time);
    }
});

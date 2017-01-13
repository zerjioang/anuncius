var item_template = '\
<div class="gl-featured-items col-md-3 col-sm-3 col-xs-12">\
    <div class="gl-feat-items-img-wrapper">\
        <picture>\
            <source media="(min-width: 768px)" srcset=https://static.anunci.us/theme/images/product.png>\
            <img alt="Category Image" srcset=https://static.anunci.us/theme/images/product.png>\
        </picture>\
\
        <span class="gl-price-tag">Ver precio</span>\
    </div>\
\
    <div class="gl-feat-item-details">\
        <span class="gl-item-status-label gl-sold-label">Oferta</span>\
\
        <h3>\
            <a href="/item/1">Item en venta</a>\
        </h3>\
        <div class="gl-item-location">\
            <i class="ion-ios-location-outline"></i>\
            <span>Anuncio destacado</span>\
        </div>\
    </div>\
\
    <div class="gl-feat-item-metas">\
        <ul class="gl-feature-info">\
            <li class="font-bold">PRO</li>\
            <li class="font-bold">NUEVO</li>\
            <li class="font-bold">GRATIS</li>\
        </ul>\
\
        <ul class="gl-wishlist-compare-wrapper">\
            <li>\
                <a href="/item/1" class="gl-add-wishlist">\
                    <i class="fa fa-star-o" aria-hidden="true"></i>\
                </a>\
            </li>\
            \
            <li>\
                <a href="/item/1" class="gl-add-wishlist">\
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>\
                </a>\
            </li>\
            \
            <!--\
            <li>\
                <a href="/item/1" class="gl-add-compare">\
                    <div class="gl-compare-btn">\
                        <span class="icon-bar"></span>\
                        <span class="icon-bar"></span>\
                        <span class="icon-bar"></span>\
                    </div>\
                </a>\
            </li>\
            -->\
        </ul>\
    </div>\
</div>';

//generic on error message
var onError = function (jqXHR, textStatus, errorThrown) {
    if(textStatus!==undefined && textStatus!==errorThrown){
        //swal("Ups!", "Ocurrió un error al procesar la solicitud. Por favor, intentelo más tarde", "error");
        swal(errorThrown, textStatus, "error");
    }
};
    
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

//get current user location
//example on https://developer.mozilla.org/es/docs/Web/API/Geolocation/getCurrentPosition
function getNavigationLocation() {
    if (navigator.geolocation) {
        var options = {
            enableHighAccuracy: true,
            timeout: 3000,
            maximumAge: 0
        };
        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        };
        navigator.geolocation.getCurrentPosition(onPositionSuccess, error, options);
    }
}

function onPositionSuccess(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log("Navigator location: "+lat+" "+lon);
    console.log("Accuracy: "+location.accuracy);
    console.log("Heading: "+location.heading);
    resolveAddress(position);
}

function resolveAddress(position){
    var locCurrent = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': locCurrent }, function (results, status) {
            var arrAddress = '';
            var itemRoute='';
            var itemLocality='';
            var itemCountry='';
            var itemPc='';
            var itemSnumber='';
            for (var resultIdx = 0; resultIdx < results.length; resultIdx++){
                var individualResult = results[resultIdx];
                var addressList = individualResult.address_components;
                for (var addressIdx = 0; addressIdx < addressList.length; addressIdx++){
                    var individualAddress = addressList[addressIdx];
                    if (individualAddress.types[0] === "route"){
                        console.log(addressIdx+": route:"+individualAddress.long_name);
                        itemRoute = individualAddress.long_name;
                    }

                    if (individualAddress.types[0] === "locality"){
                        console.log("town:"+individualAddress.long_name);
                        itemLocality = individualAddress.long_name;
                    }

                    if (individualAddress.types[0] === "country"){ 
                        console.log("country:"+individualAddress.long_name); 
                        itemCountry = individualAddress.long_name;
                    }

                    if (individualAddress.types[0] === "postal_code_prefix"){ 
                        console.log("pc:"+individualAddress.long_name);  
                        itemPc = individualAddress.long_name;
                    }

                    if (individualAddress.types[0] === "street_number"){ 
                        console.log("street_number:"+individualAddress.long_name);  
                        itemSnumber = individualAddress.long_name;
                    }
                }
            }
            var locItemCount = results.length;
            var locCountryNameCount = locItemCount - 1;
            var locCountryName = results[locCountryNameCount].formatted_address;
            console.log("Resolved country name: "+locCountryName);
            sessionStorage.locationTag = itemCountry+" "+itemLocality+" "+itemRoute+" "+itemPc+" "+itemSnumber;
            console.log("User location at: "+sessionStorage.locationTag);
            //save info on local storage and avoid multiple request on page reloading
            sessionStorage.arrAddress = arrAddress;
            sessionStorage.itemRoute = itemRoute;
            sessionStorage.itemLocality = itemLocality;
            sessionStorage.itemCountry = itemCountry;
            sessionStorage.itemPc = itemPc;
            sessionStorage.itemSnumber = itemSnumber;
            sessionStorage.userLocated = true;            
            $('#listing-title').text("Mira los últimos anuncios publicados en "+itemLocality);
    });
}

$(document).ready(function(){
    
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
    
    //set default view
    $('#container-with-featured-items').hide();
    $('#latest-items-section').hide();
    $('#container-without-featured-items').show();
    $('#feed-them-all').show();

    //ahora se piden los anuncios destacados
    getTopItems();
    //ahora se piden los ultimos
    getLatestItems();
});

function removeLoggedUserElementsFromView(showMessage){
    $('#header-menu-account').hide();
    $('#gl-side-menu-btn').show();
    $('#session-logout').hide();
    if(showMessage){
        swal("Desconectado", "Ha finalizado sesión correctamente.", "success");
    }
}

function showLoggedUserElementsInView(showMessage){
    $('#header-menu-account').show();
    $('#gl-side-menu-btn').hide();
    $('#session-logout').show();
    if(showMessage){
        swal("Sesión iniciada", "Ha iniciado sesión correctamente.", "success");
    }
}
function isGoogleProfileInfo(){
    googleProfile = sessionStorage.googleProfile;
    return googleProfile!==undefined && googleProfile!=="undefined";
}

function validateQuery() {
    var query = $('#search-item')[0].value;
    if(query===undefined || query.trim().length==0){
        swal("Sin resultados", "No se han encontrado resultados", "error");    
    }
    else if(query.trim().length>2){
        //do query
        doQuery(query.trim());
    }
    else{
        swal("No se encontraron resultados", "No se encontraron resultados para la busqueda de "+query+".Por favor intentelo más tarde", "error");
    }
}

function doQuery(query) {
    //redirect
    window.location.replace("https://anunci.us/search/item/demo&utm_source=webapp");
}

$("#session-logout").on("click", function (event) {
    signOut();
    removeLoggedUserElementsFromView(true);
});

function getLatestItems(){
    var onSuccess = function (data, textStatus, jqXHR) {
        if(data!==undefined){
            var latestItemList = data;
            //set status of the block depending on the data we have
            if(latestItemList!==undefined && latestItemList.length>0){
                var destDiv = $('#listing_elements_block');
                for (var i = 0; i<latestItemList.length; i++) {
                    var data = latestItemList[i];
                    var html = Mustache.to_html(item_template, data);
                    destDiv.append(html);
                }
                $('#feed-them-all').hide();
                $('#latest-items-section').show();
            }
            else{
                $('#feed-them-all').show();
                $('#latest-items-section').hide();
            }
        }
    };

    var onError = function (jqXHR, textStatus, errorThrown) {
        if(textStatus!==undefined && textStatus!==errorThrown){
            //swal("Ups!", "Ocurrió un error al procesar la solicitud. Por favor, intentelo más tarde", "error");
        }
    };

    var payload = {};
    contactAPIviaPOST('/ads/list/latest', payload, onSuccess, onError);
}

function getTopItems(){
    var onSuccess = function (data, textStatus, jqXHR) {
        if(data!==undefined){
            var featuredList = [0, 1, 2, 3, 4];
            if(featuredList!==undefined && featuredList.length>0){
                //render on screen
                var destDiv = $('#featured_elements_block');
                for (var i = 0; i<featuredList.length; i++) {
                    var data = {};
                    var html = Mustache.to_html(item_template, data);
                    destDiv.append(html);
                }
                $('#container-with-featured-items').show();
                $('#container-without-featured-items').hide();
            }
            else{
                $('#container-with-featured-items').hide();
                $('#container-without-featured-items').show();
            }
        }
    };

    var onError = function (jqXHR, textStatus, errorThrown) {
        if(textStatus!==undefined && textStatus!==errorThrown){
            //swal("Ups!", "Ocurrió un error al procesar la solicitud. Por favor, intentelo más tarde", "error");
        }
    };

    var payload = {};
    contactAPIviaPOST('/ads/list/best', payload, onSuccess, onError);
}
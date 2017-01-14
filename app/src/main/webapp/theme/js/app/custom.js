//generic on error message
var onError = function (jqXHR, textStatus, errorThrown) {
    if(textStatus!==undefined && textStatus!==errorThrown){
        //swal("Ups!", "Ocurrió un error al procesar la solicitud. Por favor, intentelo más tarde", "error");
        swal(errorThrown, textStatus, "error");
    }
};

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
            sessionStorage.latitude = position.coords.latitude;
            sessionStorage.longitude = position.coords.longitude;         
            $('#listing-title').text("Mira los últimos anuncios publicados en "+itemLocality);
    });
}

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
    //encode uri
    query = escape(query);
    query = encodeURI(query);
    //redirect
    window.location.replace("/search/item/"+query+"&utm_source=webapp");
}

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

function getSourcePath() {
    var thisUrl = window.location.href;
    var host = 'https://anunci.us';
    thisUrl = thisUrl.replace(host, "");
    host = 'http://localhost:8084';
    thisUrl = thisUrl.replace(host, "");
    return thisUrl;
}

function log(string) {
    if(dev && string!==undefined){
        console.log(string);
    }
}

function secureString(data){
    if(data!==undefined){
        if(data.indexOf("'")!==-1){
            return false;
        }
        if(data.indexOf("\"")!==-1){
            return false;
        }
        if(data.indexOf("<")!==-1){
            return false;
        }
        if(data.indexOf(">")!==-1){
            return false;
        }
        if(data.indexOf(";")!==-1){
            return false;
        }
        if(data.indexOf("(")!==-1){
            return false;
        }
        if(data.indexOf(")")!==-1){
            return false;
        }
        return true;
    }
    return false;
}
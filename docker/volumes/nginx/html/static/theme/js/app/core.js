/* global notificationsEnabled */

//generic on error message
var onError = function (jqXHR, textStatus, errorThrown) {
    if(textStatus!==undefined && textStatus!==errorThrown){
        //swal("Ups!", "Ocurrió un error al procesar la solicitud. Por favor, intentelo más tarde", "error");
        swal("Problema de conexión", "Ocurrió un problema al procesar tu solicitud. Por favor, intentalo de nuevo mas tarde. Si el problema continua, ponte en contacto con nosotros.", "error");
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
            localStorage.locationTag = itemCountry+" "+itemLocality+" "+itemRoute+" "+itemPc+" "+itemSnumber;
            console.log("User location at: "+localStorage.locationTag);
            //save info on local storage and avoid multiple request on page reloading
            localStorage.arrAddress = arrAddress;
            localStorage.itemRoute = itemRoute;
            localStorage.itemLocality = itemLocality;
            localStorage.itemCountry = itemCountry;
            localStorage.itemPc = itemPc;
            localStorage.itemSnumber = itemSnumber;
            localStorage.userLocated = true;   
            localStorage.latitude = position.coords.latitude;
            localStorage.longitude = position.coords.longitude;         
            $('#listing-title').text("Mira los últimos anuncios publicados en "+itemLocality);
    });
}

function removeLoggedUserElementsFromView(showMessage){
    $('#header-menu-account').hide();
    $('#btn-header-login').show();
    $('#session-logout').hide();
    if(showMessage){
        swal("Desconectado", "Ha finalizado sesión correctamente.", "success");
    }
}

function showLoggedUserElementsInView(showMessage){
    $('#header-menu-account').show();
    $('#btn-header-login').hide();
    $('#session-logout').show();
    if(showMessage){
        swal("Sesión iniciada", "Ha iniciado sesión correctamente.", "success");
    }
}
function isGoogleProfileInfo(){
    googleProfile = getGoogleProfile();
    return googleProfile!==undefined && googleProfile!=="undefined";
}

function validateQuery() {
    var query = $('#search-item')[0].value;
    if(query===undefined || query.trim().length===0){
        //swal("Sin resultados", "No se han encontrado resultados", "error");    
        //instead of showing an error, redirect to explore
        window.location.replace("/explore");
        
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
            if(latestItemList!==undefined 
                && data.request_completed == true
                && latestItemList.list!==undefined
                && latestItemList.list.length>0){
                var destDiv = $('#listing_elements_block');
                for (var i = 0; i<latestItemList.list.length; i++) {
                    var data = latestItemList.list[i];
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
            var featuredList = data;
            if(featuredList!==undefined 
                && data.request_completed == true
                && featuredList.list!==undefined
                && featuredList.list.length>0){
                //render on screen
                var destDiv = $('#featured_elements_block');
                for (var i = 0; i<featuredList.list.length; i++) {
                    var data = featuredList.list[i];
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

function getStats(){
    var onSuccess = function (data, textStatus, jqXHR) {              
        if(data!==undefined){
            $('#num_clientes_actuales').text(data.clients);
            $('#num_prod_actuales').text(data.items);
            $('#num_usuarios').text(data.users);
        }
    };

    var onError = function (jqXHR, textStatus, errorThrown) {
        if(textStatus!==undefined && textStatus!==errorThrown){
            //swal("Ups!", "Ocurrió un error al procesar la solicitud. Por favor, intentelo más tarde", "error");
        }
    };

    var payload = {};
    contactAPIviaPOST('/search/stats', payload, onSuccess, onError);
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

function getFormDataAsJson(form) {
    var data = {};
    for(var i=0; i < form.elements.length; i++){
        var e = form.elements[i];
        data[e.name] = e.value;
    }
    return data;
}

function showAutomaticApiResponseDialog(data, callback) {
    if(data!==undefined){
        var messageType = "warning";
        var buttonColor = "#DD6B55";
        if(data.request_completed!==undefined && data.request_completed===true){
            messageType = "success";
            buttonColor = '#337ab7';
        }
        
        swal({
            title: data.title_es,
            text: data.message_es,
            type: messageType,
            showCancelButton: false,
            confirmButtonColor: buttonColor,
            confirmButtonText: "Aceptar",
            closeOnConfirm: true
          },
          function(){
            if(callback){
                callback();
            }
          });
    }
}

function parseUrl(url) {
    var minimum_state_name_length = 2;
    var minimum_city_name_length = 2;
    var minimum_neigh_name_length = 2;
    var data = [];
    var valid_structure = false;
    if(url!==undefined){
        var items = url.split("/");
        //remove first item
        items.splice(0, 1);
        if(items!==undefined && items.length>0){
            //parse url items
            //specification
            /*
                item 0: 'explore'(constant)
                item 1: country_code: es, fr, ch, us, etc (variable)
                item 2: 'place' (constant)
                item 3: state (variable)
                item 4: city (variable, if exists)
                item 5: neighbourd (variable, if exists)
            */
            if(items.length === 2){
                //only country defined
                valid_structure = items[0] === 'explore' && items[1].length == 2;
                data['country'] = items[1].replace('-', ' ');
            }
            else if(items.length === 4){
                //country + state defined
                valid_structure = items[0] === 'explore' && items[1].length == 2 && items[2] === 'place' && items[3].length > minimum_state_name_length;
                data['country'] = items[1].replace('-', ' ');
                data['state'] = items[3].replace('-', ' ');
            }
            else if (items.length === 5){
                //country + state + city defined
                valid_structure = items[0] === 'explore' && items[1].length == 2 && items[2] === 'place' && items[3].length > minimum_state_name_length && items[4].length > minimum_city_name_length;
                data['country'] = items[1].replace('-', ' ');
                data['state'] = items[3].replace('-', ' ');
                data['city'] = items[4].replace('-', ' ');
            }
            else if(items.length === 6){
                //country + state + city + neighbourd
                valid_structure = items[0] === 'explore' && items[1].length == 2 && items[2] === 'place' && items[3].length > minimum_state_name_length && items[4].length > minimum_city_name_length && items[5].length > minimum_neigh_name_length;
                data['country'] = items[1].replace('-', ' ');
                data['state'] = items[3].replace('-', ' ');
                data['city'] = items[4].replace('-', ' ');
                data['district'] = items[5].replace('-', ' ');
            }
        }
    }
    return data;
}

function showQueryResults(query) {
    //show message while requesting data
    swal({
      title: "Buscando coincidencias",
      text: "Explorando entre nuestros ficheros empolvados...",
      type: "info",
      showCancelButton: false,
      closeOnConfirm: true,
      showLoaderOnConfirm: true,
      confirmButtonText: "Ver resultados",
      timer: 2400
    });
}

function publishNewProduct(){
    swal({
      title: "Confirmar publicación",
      text: "Pulse continuar para finalizar el proceso de publicación",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Publicar",
      closeOnConfirm: true
    },
    function(){
      //ejecutar llamada ajax y luego el popup
      swal("Finalizado", "Publicación realizada correctamente", "success");
    });
}

function showQueryError(query){
    swal({
      title: "Sin resultados",
      text: "No se han encontrado resultados para lo que nos has pedido buscar. Ni siquiera hemos encontrado cosas parecidas.",
      type: "error",
      showCancelButton: false,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Lo entiendo",
      closeOnConfirm: true
    });
}

function hideLoader(){
    //hide loader
    $('#gl-circle-loader-wrapper').fadeOut('slow');
}
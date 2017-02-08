var host = 'https://api.anunci.us/api/';
var base = 'v1';

var thisUrl = window.location.href;
console.log(thisUrl);

var localDate = new Date();
var dev = false;

if(thisUrl.startsWith('http://localhost:8084')){
    host = 'http://localhost:8084/anuncius/api/';
    dev = true;
}

function contactAPIviaGET(remotePath, payload, onSuccess, onError) {
    remotePath = getFullyQualifiedRemotePath(remotePath);
    contactAPI(remotePath, payload, onSuccess, onError, 'get');
}

function contactAPIviaPOST(remotePath, payload, onSuccess, onError) {
    remotePath = getFullyQualifiedRemotePath(remotePath);
    contactAPI(remotePath, payload, onSuccess, onError, 'post');
}

function contactAPIviaPUT(remotePath, payload, onSuccess, onError) {
    remotePath = getFullyQualifiedRemotePath(remotePath);
    contactAPI(remotePath, payload, onSuccess, onError, 'put');
}

function contactAPIviaDELETE(remotePath, payload, onSuccess, onError) {
    remotePath = getFullyQualifiedRemotePath(remotePath);
    contactAPI(remotePath, payload, onSuccess, onError, 'delete');
}

function contactAPI(remotePath, payload, onSuccess, onError, requestType) {
    
    //add context information before any request
    payload = {};

    //add metadata
    payload['time'] = localDate.getTime();
    payload['user_agent'] = navigator.userAgent;
    payload['cookies'] = navigator.cookieEnabled;
    payload['language'] = navigator.language;
    payload['platform'] = navigator.platform;
    payload['vendor'] = navigator.vendor;
    
    payload['lat'] = localStorage.latitude;
    payload['lon'] = localStorage.longitude;
    //add loc
    if(hasGoogleProfile()){
        payload['loc'] = localStorage.locationTag;
        //add token
        payload['token'] = getGoogleUserToken();
    }
    else{
        payload['loc'] = "unknown";
        //add token
        payload['token'] = "unknown";
    }
    
    $.ajax({
        method: requestType,
        url: remotePath,
        dataType: 'json',
        data: payload,
        error: function (jqXHR, textStatus, errorThrown) {
            if (onError) {
                onError(jqXHR, textStatus, errorThrown);
            }
        },
        success: function (data, textStatus, jqXHR) {
            if (onSuccess) {
                onSuccess(data, textStatus, jqXHR);
            }
        }
    });
}

function getFullyQualifiedRemotePath(remotePath) {
    return host  + base + remotePath;
}

//ajax call collection

//ajax

function notifySignIn(){
    var onSuccess = function (data, textStatus, jqXHR) {              
        if(data!==undefined){
        }
    };

    var onError = function (jqXHR, textStatus, errorThrown) {
        if(textStatus!==undefined && textStatus!==errorThrown){
        }
    };
    
    var p = getGoogleProfile();
    if(p!==undefined){
        var payload = {
            "id" : p.id,
            "fullname" : p.full_name,
            "givenname" : p.given_name,
            "familiyname" : p.family_name,
            "image" : p.image,
            "email" : p.email,
            /*"token" : p.getAuthResponse().id_token, this is not a function*/
        };
        contactAPIviaPUT('/private/auth/login', payload, onSuccess, onError);
    }
}

function notifySignOut(){
    var onSuccess = function (data, textStatus, jqXHR) {              
        if(data!==undefined){
        }
    };

    var onError = function (jqXHR, textStatus, errorThrown) {
        if(textStatus!==undefined && textStatus!==errorThrown){
        }
    };
    
    var p = getGoogleProfile();
    if(p!==undefined){
        var payload = {
            "id" : p.id,
            "token" : p.id,
            /*"token" : p.getAuthResponse().id_token, this is not a function*/
        };
        contactAPIviaPUT('/private/auth/logout', payload, onSuccess, onError);
    }
    //clear storage
    localStorage.removeItem('googleProfile');
}

function doQuery(query) {
    //encode uri
    query = escape(query);
    query = encodeURI(query);
    //redirect
    window.location.replace("/public/search/item/"+query+"&utm_source=webapp");
}

function getLatestItems(){
    var onSuccess = function (data, textStatus, jqXHR) {
        if(data!==undefined){
            processLatest(data.latest);
        }
    };

    var onError = function (jqXHR, textStatus, errorThrown) {
        if(textStatus!==undefined && textStatus!==errorThrown){
            //swal("Ups!", "Ocurrió un error al procesar la solicitud. Por favor, intentelo más tarde", "error");
        }
    };

    var payload = {};
    contactAPIviaGET('/public/show/list/latest', payload, onSuccess, onError);
}

function getTopItems(){
    var onSuccess = function (data, textStatus, jqXHR) {              
        if(data!==undefined){
            processBest(data.best);
        }
    };

    var onError = function (jqXHR, textStatus, errorThrown) {
        if(textStatus!==undefined && textStatus!==errorThrown){
            //swal("Ups!", "Ocurrió un error al procesar la solicitud. Por favor, intentelo más tarde", "error");
        }
    };

    var payload = {};
    contactAPIviaGET('/public/show/list/best', payload, onSuccess, onError);
}

//subscribe button event
$("#btn-suscribe-form").on("click", function (event) {
    event.preventDefault();

    var onSuccess = function (data, textStatus, jqXHR) {
        showAutomaticApiResponseDialog(data);
    };

    var payload = {
        'email': $("#subscription-form-email").val()
    };

    contactAPIviaPOST('/public/contact/subscribe/user', payload, onSuccess, onError);
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

    contactAPIviaGET('/public/search', payload, onSuccess, onError);
});

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

    contactAPIviaPOST('/private/ads/new', payload, onSuccess, onError);
});

function getLandingInfo(){
    var onSuccess = function (data, textStatus, jqXHR) {              
        if(data!==undefined){
            processLatest(data.latest);
            processBest(data.best);
            processStats(data.stats);
        }
    };

    var onError = function (jqXHR, textStatus, errorThrown) {
        if(textStatus!==undefined && textStatus!==errorThrown){
            //swal("Ups!", "Ocurrió un error al procesar la solicitud. Por favor, intentelo más tarde", "error");
        }
    };

    var payload = {};
    contactAPIviaGET('/public/show/landing', payload, onSuccess, onError);
}
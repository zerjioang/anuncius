var host = 'https://api.anunci.us/';
var base = 'v1/public';

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

    if(payload==undefined){
        payload = {};
    }

    //add metadata
    payload['time'] = localDate.getTime();
    payload['user_agent'] = navigator.userAgent;
    payload['cookies'] = navigator.cookieEnabled;
    payload['language'] = navigator.language;
    payload['platform'] = navigator.platform;
    payload['vendor'] = navigator.vendor;
    
    payload['lat'] = sessionStorage.latitude;
    payload['lon'] = sessionStorage.longitude;
    //add loc
    if(isGoogleProfileInfo()){
        payload['loc'] = sessionStorage.locationTag;
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

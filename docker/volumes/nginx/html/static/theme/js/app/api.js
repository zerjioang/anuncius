var host = 'https://api.anunci.us/';
var base = 'api/v1/public';

var thisUrl = window.location.href;
console.log(thisUrl);

var localDate = new Date();

if(thisUrl.startsWith('http://localhost:8084')){
    host = 'http://localhost:8084/';
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
    
    if(payload){
        payload['time'] = localDate.getTime();
        payload['user_agent'] = navigator.userAgent;
        payload['cookies'] = navigator.cookieEnabled;
        payload['language'] = navigator.language;
        payload['platform'] = navigator.platform;
        payload['vendor'] = navigator.vendor;
    }
    
    if(isGoogleProfileInfo()){
        payload['loc'] = sessionStorage.locationTag;
    }
    else{
        payload['loc'] = "unknown";
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
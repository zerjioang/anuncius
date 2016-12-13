var host = './';
var port = '80';
var base = '/api/v1/public';

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
    $.ajax({
        method: requestType,
        url: remotePath,
        dataType: 'json',
        data: payload,
        error: function (jqXHR, textStatus, errorThrown) {
            if(onError){
                onError();
            }
        },
        success: function (data, textStatus, jqXHR) {
            if(onSuccess){
                onSuccess();
            }
        }
    });
}

function getFullyQualifiedRemotePath(remotePath){
    return host+':'+port+base+remotePath;
}
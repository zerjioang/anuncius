// A $( document ).ready() block.
$(document).ready(function() {
    var logged = false;
    var socket = $.atmosphere;
    var request = { url: 'http://localhost:8084/anuncius/api/push',
                    contentType : "application/json",
                    logLevel : 'debug',
                    transport : 'websocket' , //sse
                    fallbackTransport: 'long-polling'
                };
    request.onOpen = function(response) {
        console.log('Atmosphere connected using ' + response.transport);
    };
    request.onMessage = function (response) {
        var message = response.responseBody;
        try {
            var json = JSON.parse(message);
        } catch (e) {
            console.log('This does not look like a valid JSON: ', message.data);
            return;
        }
        if (!logged) {
            logged = true;
            console.log(json);
        } else {
            console.log(json);
        }
    };
    request.onClose = function(response) {
        logged = false;
    };
    
    request.onError = function(response) {
        console.log('Sorry, but there is some problem with your socket or the server is down')
    };
    if(socket!==undefined){
        var subSocket = socket.subscribe(request);
    }
   
   $('#btn').on('click', function() {
       var author = "demo-autor";
       var message = "demo-message";
       subSocket.push(JSON.stringify({ author: author, message: message }));
    });
    
});

//subscribe button event
$("#btn-suscribe-form").on("click", function (event) {
    event.preventDefault();

    var onError = function () {
        alert('error');
    };

    var onSuccess = function () {
        alert('success');
    };

    var payload = {
        'email': $("#subscription-form-email").val()
    };

    contactAPIviaPOST('/suscribe/user/', payload, onSuccess, onError);
});

//get current user location
function getNavigationLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition();
    return undefined;
}

function getNavigationCoordinates(){
    var location = getNavigationLocation();
    if(location!=undefined){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log("Navigator location: "+lat+" "+lon);
    }
}
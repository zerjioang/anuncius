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

//search button event
$("#btn-search-form").on("click", function (event) {
    event.preventDefault();

    var onError = function () {
        alert('error');
    };

    var onSuccess = function () {
        alert('success');
    };

    var payload = {
        'item': $("#search_box_item").val()
    };

    contactAPIviaGET('/search', payload, onSuccess, onError);
});

//get current user location
function getNavigationLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition();
    }
    return undefined;
}

function getNavigationCoordinates(){
    varhead location = getNavigationLocation();
    if(location!=undefined){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log("Navigator location: "+lat+" "+lon);
        console.log("Accuracy: "+location.accuracy);
        console.log("Heading: "+location.heading);
    }
}

function resolveAddress(){
    var locCurrent = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': locCurrent }, function (results, status) {
            var locItemCount = results.length;
            var locCountryNameCount = locItemCount - 1;
            var locCountryName = results[locCountryNameCount].formatted_address;
            console.log("Resolved name: "+locCountryName);
    });
}
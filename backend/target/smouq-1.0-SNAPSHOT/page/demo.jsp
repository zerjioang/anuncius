<%@ taglib prefix="template" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    </head>
    <body>
        <h1>Bienvenido visitante *<s:property value="name"/>*</h1>
        <h2>Si no me equivoco...eres de </h2><h2 id="place"></h2>
        <script>
            $( document ).ready(function() {
                console.log( "ready!" );
                var x = document.getElementById("place");
                getLocation();
                showPosition();
                function getLocation() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showPosition);
                    } else {
                        x.innerHTML = " un sitio cercano";
                    }
                }
                function showPosition(position) {
                    resolveAddress(position.coords.latitude, position.coords.longitude,  position.coords.accuracy);
                }
                
                function resolveAddress(latitude, longitude, acc){
                    var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&sensor=false";
                    $.ajax({url: url, success: function(result){
                        console.log(result);
                        var address = result;
                        x.innerHTML = "Latitude: " + latitude + 
                                        "<br>Longitude: " + longitude + 
                                        "<br>Accuracy: " +acc +
                                        "<br>Address: " + getList(address.results)
                                ; 
                    }});
                }
                
                function getList(results){
                    var places = "";
                    for(var i=0; i< results.length; i++){
                        places+= "<br>"+results[i].formatted_address
                    }
                    return places;
                }
            });
        </script>
    </body>
</html>

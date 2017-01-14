var view = new ol.View({
  center: [0, 0],
  zoom:15
});

var radius = 6;
var width = 2;
var showlocation = false;
if(!showlocation){
  radius = 0;
  width = 0;
}

var map = 
  new ol.Map({
    interactions: ol.interaction.defaults({mouseWheelZoom:false}),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'map',
    view: view
  });

var geolocation = new ol.Geolocation({
  projection: view.getProjection(),
  tracking: true
});

var listener = el('track');
if(listener!==undefined && listener!==null){
  listener.addEventListener('change', function() {
    geolocation.setTracking(this.checked);
  });
}

//update html, log
geolocation.on('change', function(evt) {
  log('Geolocation change detected: '+geolocation.getPosition());
  //map.getView().setCenter(geolocation.getPosition());
});

// handle geolocation error.
geolocation.on('error', function(error) {
  log(error.message);
});


var accuracyFeature = new ol.Feature();
geolocation.on('change:accuracyGeometry', function() {
  var geometry = geolocation.getAccuracyGeometry();
  if(showlocation){
    accuracyFeature.setGeometry(geometry);
  }
  onAccuracyChangeEvent();
});

var positionFeature = new ol.Feature();
positionFeature.setStyle(new ol.style.Style({
  image: new ol.style.Circle({
    radius: radius,
    fill: new ol.style.Fill({
      color: '#3399CC'
    }),
    stroke: new ol.style.Stroke({
      color: '#fff',
      width: width
    })
  })
}));

geolocation.on('change:position', function() {
  var coordinates = geolocation.getPosition();
  view.setCenter(coordinates);
  positionFeature.setGeometry(coordinates ?new ol.geom.Point(coordinates) : null);
  onLocationChangeEvent();
});

new ol.layer.Vector({
  map: map,
  source: new ol.source.Vector({
    features: [accuracyFeature, positionFeature]
  })
});

function el(id) {
  return document.getElementById(id);
}

function onLocationChangeEvent() {
  log('custom on location change event');
}

function onAccuracyChangeEvent() {
  log('custom on accuracy change event');
}
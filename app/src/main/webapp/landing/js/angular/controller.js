//VARIABLES DE DEFINICION
var appName = 'smouq_landing';
var mainControllerName = 'landingController';

//MAIN CONTROLLER
var app = angular.module(appName, ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "landing/pages/home.jsp"
    })
    .when("/login", {
        templateUrl : "landing/pages/login.jsp"
    })
    .when("/readmore", {
        templateUrl : "landing/pages/read.more.jsp"
    });
});

app.controller(mainControllerName, function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});
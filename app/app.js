'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.alert',
    'myApp.validation',
    'myApp.login',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/alerts'});
}]).run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
    $rootScope.location = $location;
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
       if(!$window.localStorage['authToken'].length) {
           $location.path('/login');
       }
    });
}]);

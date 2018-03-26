'use strict';

angular.module('myApp.validation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutCtrl',
    showMenu: true
  });
}])

.controller('AboutCtrl', [function() {

}]);
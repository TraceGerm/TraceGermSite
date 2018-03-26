'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl',
            showMenu: false
        });
    }])

    .controller('LoginCtrl', ['$scope', '$location', '$window', 'LoginService', function ($scope, $location, $window, LoginService) {


        $scope.loginInfo = {};

        $scope.login = function () {
            LoginService.login($scope.loginInfo).then(function (response) {
                console.log(response)
                $window.localStorage['authToken'] = response.data.token;
                $location.path('/alert');
            })
        }

    }])

    .service('LoginService', ['$http', function ($http) {
        return {
            login: function (loginInfo) {
                return $http.post('/api/auth/admin', loginInfo);
            }
        }
    }]);
;
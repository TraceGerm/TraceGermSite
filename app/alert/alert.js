'use strict';

angular.module('myApp.alert', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/alerts', {
            templateUrl: 'alert/alert.html',
            controller: 'AlertCtrl'
        });
    }])

    .controller('AlertCtrl', ['$scope', '$interval', 'AlertService', function ($scope, $interval, AlertService) {

        $scope.alerts = [];
        var socket = new SockJS('/api/tracegerm-websocket');
        var stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            stompClient.subscribe('/topic/alerts', function (alert) {
                $scope.alerts.push(JSON.parse(alert.body));
                $scope.$apply();
            });
        });


        $scope.getAlerts = function () {
            AlertService.getAlerts().then(function (response) {
                $scope.alerts = response.data;
            })
        }

        $scope.getAlerts();

        $scope.removeAlert = function (id) {
            AlertService.removeAlert(id).then(function (response) {
                $scope.getAlerts();
            });
        }

        $scope.acceptAlert = function (alert) {
            var updatedAlert = {
                "id": alert.id,
                "timestamp": alert.timestamp,
                "accepted": true,
                "user": alert.user
            }

            AlertService.acceptAlert(alert.id, updatedAlert).then(function (response) {
                $scope.getAlerts();
            })

        }
    }])

    .service('AlertService', ['$http', '$window', function ($http, $window) {
        return {
            getAlerts: function () {
                return $http.get('/api/alerts/isNotAccepted/false', {
                    headers: {'X-Auth-Token': $window.localStorage['authToken']}
                });
            },

            removeAlert: function (id) {
                return $http.delete('/api/alerts/'+id,  {
                    headers: {'X-Auth-Token': $window.localStorage['authToken']}
                })
            },

            acceptAlert: function (id, alert) {
                return $http.put('/api/alerts/'+id, alert, {
                    headers: {'X-Auth-Token': $window.localStorage['authToken']}
                })

            }
        }
    }]);
;
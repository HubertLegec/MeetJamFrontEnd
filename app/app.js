'use strict';

// Declare app level module which depends on views, and components
(function () {
    var app =angular.module('myApp', [
        'ngRoute',
        'myApp.view1',
        'myApp.view2',
        'myApp.version',
        'myApp.home',
        'myApp.login',
        'myApp.signup'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

    app.controller('AppCtrl', function () {

    });
})();


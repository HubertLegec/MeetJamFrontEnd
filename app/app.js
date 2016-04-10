(function () {
    'use strict';

    var app =angular.module('myApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .when('/login', {
                templateUrl: 'login/login.html',
                controller: 'LoginController'
            })
            .when('/signup', {
                templateUrl: 'signup/signup.html',
                controller: 'SignUpController'
            })
            .when('/view1', {
                templateUrl: 'view1/view1.html',
                controller: 'View1Controller'
            })
            .when('/view2', {
                templateUrl: 'view2/view2.html',
                controller: 'View2Controller'
            })
            .otherwise({redirectTo: '/'});
    });

    app.controller('AppController', function () {
        var vm = this;
    });

})();


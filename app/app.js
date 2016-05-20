(function () {
    'use strict';

    var app = angular.module('myApp', ['ngRoute','ui.bootstrap']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .when('/login', {
                templateUrl: 'account/login/login.html',
                controller: 'LoginController'
            })
            .when('/signup', {
                templateUrl: 'account/signup/signup.html',
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
            .when('/account/signup/signup-success', {
                templateUrl: 'account/signup/signup-success.html',
                controller: 'View2Controller'
            })
            //TODO Add access control, check example at http://bit.ly/1qyedFt
            .when('/events/event_list', {
                templateUrl: 'events/event_list/event_list.html',
                controller: 'EventListController'
            })
            .otherwise({redirectTo: '/'});
    });
})();


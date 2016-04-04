/**
 * Created by Marcin on 2016-04-03.
 */

'use strict';

angular.module('myApp.signup', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'SignUpCtrl'
        });
    }])

    .controller('SignUpCtrl', [function() {
        
        this.signUp = function () {
            
        };
        
    }]);
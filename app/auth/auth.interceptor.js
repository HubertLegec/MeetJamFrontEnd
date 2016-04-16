(function () {
    'use strict';

    angular
        .module('myApp')
        .config(function($httpProvider) {
            $httpProvider.interceptors.push('authInterceptor');
        });

    function authInterceptor(API, AuthService) {
    }
})();
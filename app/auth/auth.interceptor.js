(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('authInterceptor', authInterceptor)
        .config(function($httpProvider) {
            $httpProvider.interceptors.push('authInterceptor');
        });

    function authInterceptor(API_LOCAL, TOKEN_HEADER, AuthService) {
        return {
            // automatically attach token header
            request: function(config) {
                var token = AuthService.getToken();
                if(config.url.indexOf(API_LOCAL) === 0 && token) {
                    config.headers[TOKEN_HEADER] = token;
                }
                return config;
            },
            
            response: function(res) {
                return res;
            }
        }
    }
})();
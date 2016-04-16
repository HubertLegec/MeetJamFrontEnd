(function () {
    'use strict';

    angular
        .module('myApp')
        .service('AuthService', AuthService);
    
    function AuthService($rootScope, $window) {
        var vm = this;

        vm.parseJwt = function(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse($window.atob(base64));
        };

        vm.saveToken = function(token) {
            $window.localStorage.setItem('jwtToken',token);//['jwtToken'] = token;
        };

        vm.getToken = function() {
            return $window.localStorage.getItem('jwtToken');//['jwtToken'];
        };

        vm.logout = function() {
            $window.localStorage.removeItem('jwtToken');
            $rootScope.$broadcast('AuthenticationLogout');
        };

        vm.isAuth = function () {
            var token = vm.getToken();
            return token ? true : false;
        };
    }
})();

//used authentication example from: https://thinkster.io/angularjs-jwt-auth
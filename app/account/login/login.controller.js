(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope','$location','LoginService','AuthService'];

    function LoginController($rootScope, $location, LoginService, AuthService) {
        var vm = this;
        vm.errorLogin = null;
        vm.errorToken = null;
        
        vm.login = function () {
            vm.errorLogin = null;
            vm.errorToken = null;
            
            LoginService.login(vm.username, vm.password)
                .then(function successCallback(response) {
                    var token = response.data ? response.data.token : null;
                    if(token){
                        AuthService.saveToken(token);
                        $rootScope.$broadcast('AuthenticationLogin');
                        $location.path('/');
                    } else {
                        vm.errorToken = 'ERROR';
                    }
                }, function errorCallback(response) {
                    if(response.status === 401) {
                        vm.errorLogin = 'ERROR';
                    }
                });
        };
    }
})();

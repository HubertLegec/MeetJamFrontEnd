(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$rootScope','AuthService'];
    
    function NavbarController($rootScope,AuthService) {
        var vm = this;
        vm.isLoggedIn = AuthService.isAuth();
        
        $rootScope.$on('AuthenticationLogin', function () {
            vm.isLoggedIn = AuthService.isAuth();
        });
        
        vm.logout = function () {
            AuthService.logout();
            vm.isLoggedIn = AuthService.isAuth();
        };
    }
})();
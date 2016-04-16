(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('View1Controller', View1Controller);

    View1Controller.$inject = ['AuthService'];
    
    function View1Controller(AuthService) {
        var vm = this;
        vm.isLoggedIn = AuthService.isAuth();
    }
})();
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];

    function SignUpController(SignUpService) {
        var vm = this;

        vm.signUp = function () {
            SignUpService.register(vm.username, vm.email, vm.password);
        }
    }

})();
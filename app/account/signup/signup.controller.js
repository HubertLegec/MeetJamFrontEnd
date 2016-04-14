(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$location','SignUpService'];

    function SignUpController($location, SignUpService) {
        var vm = this;
        vm.errorUserExists = null;
        vm.errorInvalidEmail = null;
        vm.errorInvalidPassword = null;
        vm.success = null;
        
        vm.signUp = function () {
            vm.errorUserExists = null;
            vm.errorInvalidEmail = null;
            vm.errorInvalidPassword = null;
            
            SignUpService.register(vm.username, vm.email, vm.password)
                .then(function successCallback(response) {
                    vm.success = 'OK';
                    $location.path('/account/signup/signup-success');
                }, function errorCallback(response) {
                    if(response.status === 406) {
                        if(response.data.messages.indexOf('User with given login already exists!') != -1)
                            vm.errorUserExists = 'ERROR';
                        if(response.data.messages.indexOf('Email is invalid!') != -1)
                            vm.errorInvalidEmail = 'ERROR';
                        if(response.data.messages.indexOf('Password do not match requirements!') != -1)
                            vm.errorInvalidPassword = 'ERROR';
                    }
                });
        }
    }
})();
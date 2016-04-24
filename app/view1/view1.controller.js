(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('View1Controller', View1Controller);

    View1Controller.$inject = ['AuthService','View1Service'];
    
    function View1Controller(AuthService,View1Service) {
        var vm = this;
        vm.isLoggedIn = AuthService.isAuth();
        
        vm.ping = function () {
            View1Service.ping()
                .then(function successCallback(response) {
                    if(response.data === "PONG"){
                        console.log(response.data);
                    } else {
                        console.log("response doesn't contain 'pong'");
                    }
                }, function errorCallback(response) {
                    if(response.status === 401) {
                        console.log("401: authentication error");
                    }
                });
        };
    }
})();
(function () {
    'use strict';

    angular
        .module('myApp')
        .service('LoginService', LoginService);

    function LoginService($http, API_LOCAL) {
        var vm = this;

        vm.login = function (username, password) {
            return $http({
                url: API_LOCAL + '/auth/login',
                method: "POST",
                params: {login: username, password: password}
            })
        };
    }
})();
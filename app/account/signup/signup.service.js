(function () {
    'use strict';

    angular
        .module('myApp')
        .service('SignUpService', SignUpService);

    function SignUpService($http, API_LOCAL) {
        var vm = this;

        vm.register = function (username, email, password) {
            return $http({
                url: API_LOCAL + '/api/account/register',
                method: "POST",
                params: {login: username, email: email, password: password}
            })
        }
    }
})();


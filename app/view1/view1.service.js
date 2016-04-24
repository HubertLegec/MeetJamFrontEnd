(function () {
    'use strict';

    angular
        .module('myApp')
        .service('View1Service', View1Service);

    function View1Service($http, API_LOCAL) {
        var vm = this;

        vm.ping = function () {
            return $http({
                url: API_LOCAL + '/ping',
                method: "GET"
            })
        };
    }
})();
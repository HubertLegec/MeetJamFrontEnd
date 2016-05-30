(function () {
    'use strict';

    angular
        .module('myApp')
        .service('EventListService', EventListService);

    function EventListService($http, API_LOCAL) {
        var vm = this;

        vm.availableInstruments = function () {
            return $http({
                url: API_LOCAL + '/api/utils/availableInstruments',
                method: "GET"
            })
        };
    }
})();
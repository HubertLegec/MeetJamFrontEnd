(function () {
    'use strict';

    angular
        .module('myApp')
        .service('CreateEventService', CreateEventService);

    function CreateEventService($http, API_LOCAL) {
        var vm = this;

        vm.availableInstruments = function () {
            return $http({
                url: API_LOCAL + '/api/utils/availableInstruments',
                method: 'GET'
            })
        };

        vm.createEvent = function(title, city, date) {
            return $http({
                url: API_LOCAL + '/api/event/create',
                method: 'POST',
                params: { 'title': title, 'city': city, 'date': date }
            })
        };

        vm.setEventDetails = function(id, description, instruments) {
            return $http({
                url: API_LOCAL + '/api/event/details',
                method: 'POST',
                data: {'id': id, 'description': description, 'instrumentsNeeded': instruments},
                transformResponse: [function() {}]
            })
        };
    }
})();
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

        vm.searchEvents = function(dateFrom, dateTo, city, instrument) {
            var par = { };
            if(dateFrom !== undefined)
                par['dateFrom'] = dateFrom;
            if(dateTo !== undefined)
                par['dateTo'] = dateTo;
            if(city !== null && city !== "")
                par['city'] = city;
            if(instrument !== "Any")
                par['instrument'] = instrument;

            return $http({
                url: API_LOCAL + '/api/event/list',
                method: 'GET',
                params: par
            })
        };

        vm.getEventDetails = function(event) {
            return $http({
                url: API_LOCAL + '/api/event/details',
                method: 'GET',
                params: { 'id': event.id }
            });
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('EventListController', EventListController);

    EventListController.$inject = ['AuthService', 'EventListService'];

    function EventListController(AuthService, EventListService) {
        var vm = this;
        
        //variables used in query to server
        vm.dateFrom = undefined;
        vm.dateTo = undefined;
        vm.city = undefined;
        vm.selectedInstrument = "Any";
        vm.instruments = null;

        vm.populateAvailableInstruments = function () {
            if (vm.instruments === null) {
                EventListService.availableInstruments()
                    .then(function successCallback(response) {
                        vm.instruments = response.data;
                        vm.instruments.unshift("Any");
                    }, function errorCallback(response) {
                        if (response.status === 401) {
                            vm.instruments = [];    // maybe something better possible
                        }
                    });
                }
        };
        
        vm.getEventDetails = function(event) {
            EventListService.getEventDetails(event)
                .then(function successCallback(response) {
                    event.description = response.data.description;
                    event.instrumentsNeeded = response.data.instrumentsNeeded;
                    event.participants = response.data.participants;
                    event.detailsLoaded = true;
                }, function errorCallback(response) {
                    event.description = 'Error while loading...';
                });
        };
        
        vm.dtOpenStatus = {
            dateFrom: false,
            dateTo: false
        };

        vm.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        vm.open = function (datepicker) {
            vm.dtOpenStatus[datepicker] = true;
        };

        vm.selectInstrument = function (instrument)
        {
            vm.selectedInstrument = instrument;
        }

        vm.toggleSelection = function (instrument) {
            var idx = vm.selectedInstruments.indexOf(instrument);
            if (idx > -1) {
                vm.selectedInstruments.splice(idx, 1);
            } else {
                vm.selectedInstruments.push(instrument);
            }
        };

        vm.search = function () {
            EventListService.searchEvents(vm.dateFrom, vm.dateTo, vm.city, vm.selectedInstrument)
                .then(function successCallback(response) {
                    vm.eventList = response.data;
                }, function errorCallback(response) {
                    vm.eventList = [];
                })
        };

    }
})();

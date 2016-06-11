(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('CreateEventController', CreateEventController);

    CreateEventController.$inject = ['AuthService', 'CreateEventService'];

    function CreateEventController(AuthService, CreateEventService) {
        var vm = this;

        vm.reset = function() {
            vm.title = null;
            vm.date = undefined;
            vm.city = null;
            vm.description = null;
            vm.instruments = null;
            vm.selectedInstruments = [];
            vm.successfullyCreated = null;
            vm.canSend = true;
        };
        
        vm.reset();

        vm.dtOpenStatus = {
            date: false
        };

        vm.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        vm.populateAvailableInstruments = function () {
            if (vm.instruments === null) {
                CreateEventService.availableInstruments()
                    .then(function successCallback(response) {
                        vm.instruments = response.data;
                    }, function errorCallback(response) {
                        if (response.status === 401) {
                            vm.instruments = [];
                        }
                    });
            }
        };

        vm.toggleSelection = function (instrument) {
            var idx = vm.selectedInstruments.indexOf(instrument);
            if (idx > -1) {
                vm.selectedInstruments.splice(idx, 1);
            } else {
                vm.selectedInstruments.push(instrument);
            }
        };

        vm.open = function (datepicker) {
            vm.dtOpenStatus[datepicker] = true;
        };


        vm.createEvent = function() {
            vm.canSend = false;
            CreateEventService.createEvent(vm.title, vm.city, vm.date)
                .then(function successCallback(response1) {
                    console.log(response1.data.id);
                    CreateEventService.setEventDetails(response1.data.id, vm.description, vm.selectedInstruments)
                        .then(function successCallback(response2) {
                            vm.successfullyCreated = true;
                        }, function errorCallback(response2) {
                            vm.successfullyCreated = false;
                        });
                }, function errorCallback(response1) {
                    vm.successfullyCreated = false;
                });
        };
        
        
        
    }
})();

(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('EventListController', EventListController);

    EventListController.$inject = ['AuthService', 'EventListService'];

    function EventListController(AuthService, EventListService) {
        var vm = this;
        
        //variables used in query to server
        vm.dateFrom = null;
        vm.dateTo = null;
        vm.city = null;
        vm.selectedInstruments = [];
        vm.instruments = null;

        vm.populateAvailableInstruments = function () {
            if (vm.instruments === null) {
                EventListService.availableInstruments()
                    .then(function successCallback(response) {
                        vm.instruments = response.data;
                    }, function errorCallback(response) {
                        if (response.status === 401) {
                            vm.instruments = [];    // maybe something better possible
                        }
                    });
                }
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

        //sample events, used only to check the view, to be populated by events from server after making query
        vm.eventList = [
            {
                id: 0,  //stored in order to get event details from server after clicking on event
                owner: "Steve",
                title: "NY Wild Jam Session",
                city: "New York",
                date: new Date(),
                participants: ["Steve", "Jerry"],
                instrumentsNeeded: ["Bass"]
            },
            {
                id: 1,
                owner: "John",
                title: "Summer Jam",
                city: "Warsaw",
                date: new Date(),
                participants: ["John", "Mike"],
                instrumentsNeeded: ["Drums"]
            }
        ];

        vm.toggleSelection = function (instrument) {
            var idx = vm.selectedInstruments.indexOf(instrument);
            if (idx > -1) {
                vm.selectedInstruments.splice(idx, 1);
            } else {
                vm.selectedInstruments.push(instrument);
            }
        };

        //test version, only printing values after clicking search button
        vm.search = function () {
            console.log(vm.dateFrom);
            console.log(vm.dateTo);
            console.log(vm.city);
            console.log(vm.selectedInstruments);
        };

    }
})();

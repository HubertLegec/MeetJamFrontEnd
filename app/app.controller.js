(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('AppController', AppController);

    AppController.$inject = ['$rootScope'];

    function AppController($rootScope) {
        var vm = this;
    }
})();
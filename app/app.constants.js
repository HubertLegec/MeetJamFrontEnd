(function () {
    "use strict";

    angular.module("myApp")
        .constant("VERSION", "0.0.1-SNAPSHOT")
        .constant('API_LOCAL', 'http://localhost:8080')
        .constant('TOKEN_HEADER','X-AUTH-TOKEN');

})();
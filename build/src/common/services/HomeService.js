angular.module('myapp.homeservice', [
        'myapp.mresturis'
    ])

    .factory('HomeService', ['$rootScope', '$http', 'P_RestURIsService', 'P_ConstantsService',
        function ($rootScope, $http, P_RestURIsService, P_ConstantsService) {
            var homeFactory = {};

            return homeFactory;
        }]);

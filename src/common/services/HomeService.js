angular.module('myapp.homeservice', [
        'myapp.mresturis'
    ])

    .factory('HomeService', ['$rootScope', '$http', 'M_RestURIsService', 'M_ConstantsService',
        function ($rootScope, $http, M_RestURIsService, M_ConstantsService) {
            var homeFactory = {};

            homeFactory.searchTweets = function (username, count, dateSince, dateUntil) {
                return $http.get(M_RestURIsService.SEARCH_TWEETS + username + '/count/' + count + '/dateSince/' + dateSince + '/dateUntil/' + dateUntil).then(function (result) {
                        return result.data;
                    },
                    function (error) {
                        console.log(error);
                    });
            };

            return homeFactory;
        }]);

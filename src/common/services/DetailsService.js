angular.module('myapp.detailsservice', [
        'myapp.mresturis'
    ])

    .factory('DetailsService', ['$rootScope', '$http', 'M_RestURIsService', 'M_ConstantsService',
        function ($rootScope, $http, M_RestURIsService, M_ConstantsService) {
            var detailsFactory = {};

            detailsFactory.searchTweets = function (username, count) {
                return $http.get(M_RestURIsService.SEARCH_TWEETS + username + '/count/' + count).then(function (result) {
                        return result.data;
                    },
                    function (error) {
                        console.log(error);
                    });
            };
            return detailsFactory;
        }]);

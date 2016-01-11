angular.module('myapp.details.view', [])

    .controller('ViewCtrl', ['$scope', '$state', '$q', 'localStorageService', 'M_UtilsService', 'M_ConstantsService', 'DetailsService',
        function ($scope, $state, $q, localStorageService, M_UtilsService, M_ConstantsService, DetailsService) {
            /**
             * Function toggle Settings
             */
            $scope.toggleSettings = function () {
                $state.transitionTo(M_ConstantsService.DETAILS_EDIT);
            };

            /**
             * Function to fetch Tweets
             */
            $scope.tweetColumns = [];
            var fetchTweets = function (username) {
                var deferred = $q.defer();
                var tweetsPromise = deferred.promise;
                tweetsPromise = DetailsService.searchTweets(username, localStorageService.get(M_ConstantsService.COUNT), localStorageService.get(M_ConstantsService.DATE_SINCE), localStorageService.get(M_ConstantsService.DATE_UNTIL));
                tweetsPromise
                    .then(function (data) {
                            if (data) {
                                var tempObj = {};
                                tempObj.key = username;
                                tempObj.value = localStorageService.get(username);
                                tempObj.tweets = data;
                                $scope.tweetColumns.push(tempObj);
                            } else {
                                console.log("Error while updating Auto Balance Value !");
                            }
                        },
                        function (error) {
                            console.log(error);
                        },
                        function (progress) {
                        });
            };
            fetchTweets(M_ConstantsService.APP_DIRECT);
            fetchTweets(M_ConstantsService.LAUGHINGSQUID);
            fetchTweets(M_ConstantsService.TECHCRUNCH);
        }]);


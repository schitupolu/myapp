angular.module('myapp.details.view', [])

    .controller('ViewCtrl', ['$scope', '$state', '$q', 'localStorageService', 'M_UtilsService', 'M_ConstantsService', 'DetailsService',
        function ($scope, $state, $q, localStorageService, M_UtilsService, M_ConstantsService, DetailsService) {
            /**
             * Function toggle Settings
             */
            $scope.toggleSettings = function () {
                $state.transitionTo(M_ConstantsService.DETAILS_EDIT);
            };
            $scope.backGroundColor = localStorageService.get(M_ConstantsService.PALETTE);

            /**
             * Gridster
             */
            $scope.gridsterOptions = {
                swapping: true,
                margins: [5, 5],
                columns: 3,
                width: 'auto',
                colWidth: 'auto',
                maxRows: 1,
                defaultSizeX: 1,
                defaultSizeY: 1,
                draggable: {
                    enabled: true
                },
                resizable: {
                    enabled: false
                }
            };

            /**
             * Function to fetch Tweets
             */
            var fetchTweets = function (account) {
                var deferred = $q.defer();
                var tweetsPromise = deferred.promise;
                tweetsPromise = DetailsService.searchTweets(account, localStorageService.get(M_ConstantsService.COUNT), localStorageService.get(M_ConstantsService.DATE_SINCE), localStorageService.get(M_ConstantsService.DATE_UNTIL));
                tweetsPromise
                    .then(function (data) {
                            if (data) {
                                angular.forEach($scope.tweetAccounts, function (value, key) {
                                    if (value.name === account) {
                                        value.tweets = data;
                                    }
                                });
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

            var constructColumn = function (name, position) {
                var tempObj = {};
                tempObj.name = name;
                tempObj.col = position;
                tempObj.row = 0;
                return tempObj;
            };

            $scope.tweetAccounts = [];
            $scope.tweetAccounts.push(constructColumn(M_ConstantsService.APP_DIRECT, localStorageService.get(M_ConstantsService.APP_DIRECT)));
            $scope.tweetAccounts.push(constructColumn(M_ConstantsService.LAUGHINGSQUID, localStorageService.get(M_ConstantsService.LAUGHINGSQUID)));
            $scope.tweetAccounts.push(constructColumn(M_ConstantsService.TECHCRUNCH, localStorageService.get(M_ConstantsService.TECHCRUNCH)));
            fetchTweets(M_ConstantsService.APP_DIRECT);
            fetchTweets(M_ConstantsService.LAUGHINGSQUID);
            fetchTweets(M_ConstantsService.TECHCRUNCH);

        }]);


angular.module('myapp.home', [
        'ui.router'
    ])

    .config(function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html',
                data: {pageTitle: 'Home'},
                requireLogin: false
            });
    })

    .controller('HomeCtrl', ['$scope', '$state', '$q', 'blockUI', 'M_UtilsService', 'M_ConstantsService', 'HomeService',
        function ($scope, $state, $q, blockUI, M_UtilsService, M_ConstantsService, HomeService) {
            //Block UI
            blockUI.instances.get('homeBlockUI').start();

            /**
             * Function to fetch Tweets
             */
            var fetchTweets = function (account) {
                var deferred = $q.defer();
                var homeTweetsPromise = deferred.promise;
                homeTweetsPromise = HomeService.searchTweets(account, M_ConstantsService.INT_30, null, new Date().toISOString().split('T')[0]);
                homeTweetsPromise
                    .then(function (data) {
                            if (data) {
                                angular.forEach($scope.tweetAccounts, function (value, key) {
                                    if (value.name === account) {
                                        value.tweets = data;
                                    }
                                });
                                blockUI.instances.get('homeBlockUI').stop();
                            } else {
                                console.log("Error while fetching Tweets !");
                                blockUI.instances.get('homeBlockUI').stop();
                            }
                        },
                        function (error) {
                            console.log(error);
                        },
                        function (progress) {
                        });
            };

            var constructColumn = function (name) {
                var tempObj = {};
                tempObj.name = name;
                return tempObj;
            };

            $scope.tweetAccounts = [];
            $scope.tweetAccounts.push(constructColumn(M_ConstantsService.APP_DIRECT));
            $scope.tweetAccounts.push(constructColumn(M_ConstantsService.LAUGHINGSQUID));
            $scope.tweetAccounts.push(constructColumn(M_ConstantsService.TECHCRUNCH));
            //Fetch @AppDirect Tweets
            fetchTweets(M_ConstantsService.APP_DIRECT);
            //Fetch @laughingsquid Tweets
            fetchTweets(M_ConstantsService.LAUGHINGSQUID);
            //Fetch @techcrunch Tweets
            fetchTweets(M_ConstantsService.TECHCRUNCH);

            /**
             * Format Create Date
             */
            //M_UtilsService.dateFormatter($scope.appdirect, M_ConstantsService.CREATED_AT);
        }]);


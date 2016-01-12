angular.module('myapp.home', [
        'ui.router'
    ])

    .config(["$stateProvider", function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html',
                data: {pageTitle: 'Home'},
                requireLogin: false
            });
    }])

    .controller('HomeCtrl', ['$scope', '$state', 'M_UtilsService', 'M_ConstantsService', 'HomeService',
        function ($scope, $state, M_UtilsService, M_ConstantsService, HomeService) {
            //Default Values
            var todayDate = new Date().toISOString().split('T')[0];

            /**
             * Function to fetch Tweets
             */
            var fetchTweets = function (username, scope) {
                //Get Tweets
                HomeService.searchTweets(username, M_ConstantsService.INT_30, null, todayDate).then(function (data) {
                    $scope[scope] = data;
                });
            };
            //Fetch @AppDirect Tweets
            fetchTweets(M_ConstantsService.APP_DIRECT, M_ConstantsService.APP_DIRECT);
            //Fetch @laughingsquid Tweets
            fetchTweets(M_ConstantsService.LAUGHINGSQUID, M_ConstantsService.LAUGHINGSQUID);
            //Fetch @techcrunch Tweets
            fetchTweets(M_ConstantsService.TECHCRUNCH, M_ConstantsService.TECHCRUNCH);

            /**
             * Format Create Date
             */
            //M_UtilsService.dateFormatter($scope.appdirect, M_ConstantsService.CREATED_AT);
        }]);


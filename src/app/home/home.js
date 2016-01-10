angular.module('myapp.home', [
        'ui.router'
    ])

    .config(function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html',
                data: {pageTitle: 'Home'},
                requireLogin: false
            });
    })

    .controller('HomeCtrl', ['$rootScope', '$scope', '$state', '$q', 'M_UtilsService', 'M_ConstantsService', 'HomeService',
        function ($rootScope, $scope, $state, $q, M_UtilsService, M_ConstantsService, HomeService) {
            //Default Values
            /**
             * Function to fetch Tweets
             */
            var fetchTweets = function (username, scope) {
                //Get Tweets
                HomeService.searchTweets(username, M_ConstantsService.INT_30).then(function (data) {
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


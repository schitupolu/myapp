angular.module('myapp.details.edit', [])

    .controller('EditCtrl', ['$scope', '$state', '$q', '$timeout', 'localStorageService', 'M_UtilsService', 'M_ConstantsService',
        function ($scope, $state, $q, $timeout, localStorageService, M_UtilsService, M_ConstantsService) {
            //Settings
            $scope.settings = {};
            //Columns
            $scope.settings.tweets = [];
            var tempObj = {};
            tempObj.key = M_ConstantsService.APP_DIRECT;
            tempObj.value = 0;
            $scope.settings.tweets.push(tempObj);
            var tempObj1 = {};
            tempObj1.key = M_ConstantsService.LAUGHINGSQUID;
            tempObj1.value = 1;
            $scope.settings.tweets.push(tempObj1);
            var tempObj2 = {};
            tempObj2.key = M_ConstantsService.TECHCRUNCH;
            tempObj2.value = 2;
            $scope.settings.tweets.push(tempObj2);

            //Time Range
            $scope.settings.date = new Date();
            var minDate = new Date();
            //$scope.settings.minDate = minDate.getDay() - 1;
            $scope.settings.maxDate = new Date();
            $scope.open = function () {
                $timeout(function () {
                    $scope.opened = true;
                });
            };
            $scope.dateOptions = {
                'year-format': "'yyyy'",
                'starting-day': 1
            };
            //Tweets Count
            $scope.settings.count = 5;
            //Palette
            $scope.settings.palette = M_ConstantsService.DEFAULT_COLOR;

            /**
             * Function invoke when click on Settings Save/Cancel Button
             */
            $scope.saveSettings = function (action) {
                if (action === M_ConstantsService.SAVE) {
                    console.log(action);
                } else if (action === M_ConstantsService.CANCEL) {
                    console.log(action);
                }
                $state.transitionTo(M_ConstantsService.DETAILS_VIEW);
            };
        }]);


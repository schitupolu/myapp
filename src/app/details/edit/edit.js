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
            //Date From
            var previousDate = new Date();
            previousDate.setDate(previousDate.getDate() - 1);
            $scope.settings.dateSince = previousDate;
            var dsMinDate = new Date();
            dsMinDate.setDate(dsMinDate.getDate() - 10);
            $scope.settings.dsMinDate = dsMinDate;
            $scope.settings.dsMaxDate = previousDate;

            //Date To
            $scope.settings.dateUntil = new Date();
            var duMinDate = new Date();
            duMinDate.setDate(duMinDate.getDate() - 9);
            $scope.settings.duMinDate = duMinDate;
            $scope.settings.duMaxDate = new Date();

            $scope.openDS = function () {
                $timeout(function () {
                    $scope.dsOpened = true;
                });
            };
            $scope.openDU = function () {
                $timeout(function () {
                    $scope.duOpened = true;
                });
            };
            $scope.dateOptions = {
                'year-format': "'yyyy'",
                'starting-day': 1
            };
            //Tweets Count
            $scope.settings.count = localStorageService.get(M_ConstantsService.COUNT);
            //Palette
            $scope.settings.palette = localStorageService.get(M_ConstantsService.PALETTE);

            /**
             * Function invoke when click on Settings Save/Cancel Button
             */
            $scope.saveSettings = function (action) {
                if (action === M_ConstantsService.SAVE) {
                    localStorageService.set(M_ConstantsService.DATE_SINCE, $scope.settings.dateSince);
                    localStorageService.set(M_ConstantsService.DATE_UNTIL, $scope.settings.dateUntil);
                    localStorageService.set(M_ConstantsService.COUNT, $scope.settings.count);
                    localStorageService.set(M_ConstantsService.PALETTE, $scope.settings.palette);
                }
                $state.transitionTo(M_ConstantsService.DETAILS_VIEW);
            };
        }]);


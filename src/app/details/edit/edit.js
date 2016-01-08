angular.module('myapp.details.edit', [])

    .controller('EditCtrl', ['$scope', '$state', '$q', '$timeout', 'M_UtilsService', 'M_ConstantsService',
        function ($scope, $state, $q, $timeout, M_UtilsService, M_ConstantsService) {
            //Settings
            $scope.settings = {};
            //Columns

            //Time Range
            var settingsVar = {};
            settingsVar.date = new Date();
            settingsVar.maxDate = new Date();
            $scope.settings = settingsVar;
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
            $scope.colorChoice = '';
            $scope.colorChoices = [
                {
                    "background": "#ecf0f1",
                    "text": "#2ecc71",
                    "link": "#3498db",
                    "accent": "#2980b9"
                },
                {
                    "background": "#1abc9c",
                    "text": "#ffffff",
                    "link": "#2980b9",
                    "accent": "#34495e"
                }
            ];

            /**
             * Function invoke when click on Settings Save/Cancel Button
             */
            $scope.saveSettings = function (action) {
                console.log("Action :: " + action);
                if (action === M_ConstantsService.SAVE) {
                    console.log(action);
                } else if (action === M_ConstantsService.CANCEL) {
                    console.log(action);
                }
                $state.transitionTo(M_ConstantsService.DETAILS_VIEW);
            };
        }]);


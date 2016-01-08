angular.module('myapp.details.view', [])

    .controller('ViewCtrl', ['$scope', '$state', 'M_ConstantsService',
        function ($scope, $state, M_ConstantsService) {
            /**
             * Function toggle Settings
             */
            $scope.toggleSettings = function () {
                $state.transitionTo(M_ConstantsService.DETAILS_EDIT);
            };
        }]);


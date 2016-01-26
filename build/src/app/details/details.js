angular.module('myapp.details', [
        'ui.router',
        'myapp.details.view',
        'myapp.details.edit'
    ])

    .config(["$stateProvider", function config($stateProvider) {
        $stateProvider
            .state('details', {
                //url: '/details',
                controller: 'DetailsCtrl',
                templateUrl: 'details/details.tpl.html',
                data: {pageTitle: 'Details'},
                requireLogin: false
            })
            .state('details.view', {
                controller: 'ViewCtrl',
                templateUrl: "details/view/view.tpl.html"
            })
            .state('details.edit', {
                controller: 'EditCtrl',
                templateUrl: "details/edit/edit.tpl.html"
            });
    }])

    .controller('DetailsCtrl', ['$scope', '$state', 'localStorageService', 'M_UtilsService', 'M_ConstantsService',
        function ($scope, $state, localStorageService, M_UtilsService, M_ConstantsService) {
            //Initial Local Storage Values
            if (localStorageService.isSupported) {
                if (M_UtilsService.isNull(localStorageService.get(M_ConstantsService.APP_DIRECT))) {
                    localStorageService.set(M_ConstantsService.APP_DIRECT, 0);
                    localStorageService.set(M_ConstantsService.LAUGHINGSQUID, 1);
                    localStorageService.set(M_ConstantsService.TECHCRUNCH, 2);
                    localStorageService.set(M_ConstantsService.DATE_UNTIL, new Date());
                    localStorageService.set(M_ConstantsService.COUNT, M_ConstantsService.INT_30);
                    localStorageService.set(M_ConstantsService.PALETTE, M_ConstantsService.DEFAULT_COLOR);
                }
            } else {
                console.error("LocalStorage is not Supported.");
            }
            //Initial Route
            $state.transitionTo(M_ConstantsService.DETAILS_VIEW);
        }]);


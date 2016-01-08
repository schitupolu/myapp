angular.module('myapp.details', [
        'ui.router',
        'myapp.details.view',
        'myapp.details.edit'
    ])

    .config(function config($stateProvider) {
        $stateProvider
            .state('details', {
                url: '/details',
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
    })

    .controller('DetailsCtrl', ['$scope', '$state', 'M_ConstantsService',
        function ($scope, $state, M_ConstantsService) {
            //Initial Route
            $state.transitionTo(M_ConstantsService.DETAILS_VIEW);
        }]);


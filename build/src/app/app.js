angular.module('myapp', [
        'templates-app',
        'templates-common',
        'ngAnimate',
        'ngSanitize',
        'ngCookies',
        'ngTouch',
        'ui.router',
        'ui.bootstrap',
        'LocalStorageModule',
        'gridster',
        'myapp.resizeHeight',
        'myapp.mconstants',
        'myapp.mutils',
        'myapp.mresturis',
        'myapp.authservice',
        'myapp.homeservice',
        'myapp.detailsservice',
        'myapp.home',
        'myapp.details'
    ])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'localStorageServiceProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $urlRouterProvider.otherwise('/');
            localStorageServiceProvider.setPrefix('myapp');
        }])

    .run(['$rootScope', '$state', 'AuthService', function ($rootScope, $state, AuthService) {
    }])

    .controller('AppCtrl', ['$rootScope', '$scope',
        function MainController($rootScope, $scope) {
            $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                if (angular.isDefined(toState.data.pageTitle)) {
                    $scope.pageTitle = toState.data.pageTitle + ' | My App';
                }
            });
        }]);


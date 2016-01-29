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
        'blockUI',
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

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'localStorageServiceProvider', 'blockUIConfig',
        function ($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider, blockUIConfig) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $urlRouterProvider.otherwise('/');
            localStorageServiceProvider.setPrefix('myapp');
            //Block UI Config
            // Disable auto body block
            blockUIConfig.autoInjectBodyBlock = false;
            // Disable automatically blocking of the user interface
            blockUIConfig.autoBlock = false;
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


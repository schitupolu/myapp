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
            $urlRouterProvider.otherwise('/home');
            localStorageServiceProvider.setPrefix('myapp');
        }])

    .run(['$rootScope', '$state', 'AuthService', function ($rootScope, $state, AuthService) {
        // Everytime the route in our app changes check auth status
        $rootScope.$on("$stateChangeStart", function (event, next, current) {
            // if you're logged out send to login page.
            if (next.requireLogin && !AuthService.getUserAuthenticated()) {
                $state.go('home');
                event.preventDefault();
            }
        });
        $rootScope.$state = $state;
    }])

    .controller('AppCtrl', ['$rootScope', '$scope', '$cookieStore', '$state', 'AuthService',
        function MainController($rootScope, $scope, $cookieStore, $state, AuthService) {
            $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                if (angular.isDefined(toState.data.pageTitle)) {
                    $scope.pageTitle = toState.data.pageTitle + ' | My App';
                }
            });
        }]);


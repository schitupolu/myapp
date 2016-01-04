angular.module('myapp.home', [
        'ui.router'
    ])

    .config(["$stateProvider", function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html',
                data: {pageTitle: 'Home'},
                requireLogin: false
            });
    }])

    .controller('HomeCtrl', ['$rootScope', '$scope', '$state', '$q',
        function ($rootScope, $scope, $state, $q) {
            console.log("In HomeCtrl !!");
        }]);


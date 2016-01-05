describe('Testing Main Application', function () {
    var AppCtrl, $location, $scope, rootScope, state, homeState = 'home';
    beforeEach(module('myapp'));

    beforeEach(inject(function ($controller, _$location_, $rootScope, $state) {
        rootScope = $rootScope;
        $location = _$location_;
        $scope = $rootScope.$new();
        state = $state;
        AppCtrl = $controller('AppCtrl', { $location: $location, $scope: $scope, state: state });
    }));

    it('Executing test cases for Main Controller', function () {
        expect(AppCtrl).toBeDefined();
    });

});
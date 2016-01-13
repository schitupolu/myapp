angular.module('myapp.resizeHeight', [])
    .directive('resizeHeight', function ($window) {
        return function (scope, element, $attrs) {
            var w = angular.element($window);
            var changeHeight = function () {
                element.css('height', (w.height() - $attrs.resizeHeight) + 'px');
            };
            w.bind('resize', function () {
                changeHeight();
            });
            changeHeight();
        };
    });
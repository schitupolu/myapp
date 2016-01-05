angular.module('myapp.mutils', [])

    .factory('M_UtilsService', [function () {

        var mUtilsFactory = {};
        /**
         * Format Date
         */
        mUtilsFactory.dateFormatter = function (data, attribute) {
            angular.forEach(data, function (value, key) {
                value[attribute] = Date.parse(value[attribute]);
            });
            return data;
        };
        return mUtilsFactory;
    }]);

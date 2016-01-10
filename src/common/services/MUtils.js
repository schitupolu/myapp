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
        },
        /**
         * Check if @param value is null or undefined
         */
            mUtilsFactory.isNull = function (value) {
                if ((value == null) || (typeof value == 'undefined')) {
                    return true;
                }
                return false;
            },

            mUtilsFactory.notNull = function (value) {
                return !this.isNull(value);
            };

        return mUtilsFactory;
    }]);

angular.module('myapp.mconstants', [])
    .constant('M_ConstantsService', {
        STATUS_CODE_OK: 200,
        //Generic Ones
        SUCCESS: 'success',
        WARNING: 'warning',
        IN_PROGRESS: 'in_progress',
        ERROR: 'error',
        //Polling Interval
        POLLING_INTERVAL_1000: 1000,
        //Create Date
        CREATED_AT: 'created_at'
    });

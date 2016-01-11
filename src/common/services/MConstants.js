angular.module('myapp.mconstants', [])
    .constant('M_ConstantsService', {
        STATUS_CODE_OK: 200,
        //Generic Ones
        SUCCESS: 'success',
        WARNING: 'warning',
        IN_PROGRESS: 'in_progress',
        ERROR: 'error',
        SAVE: 'save',
        CANCEL: 'cancle',
        //Polling Interval
        POLLING_INTERVAL_1000: 1000,
        //Tweets
        INT_30: 30,
        APP_DIRECT: 'appdirect',
        LAUGHINGSQUID: 'laughingsquid',
        TECHCRUNCH: 'techcrunch',
        CREATED_AT: 'created_at',
        //ROUTES
        DETAILS_VIEW: 'details.view',
        DETAILS_EDIT: 'details.edit',
        //LocalStorageKeys
        COUNT: 'count',
        DATE_SINCE: 'dateSince',
        DATE_UNTIL: 'dateUntil',
        PALETTE: 'palette',
        DEFAULT_COLOR: '#FFFFFF'
    });

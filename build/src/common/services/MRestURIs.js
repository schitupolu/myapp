angular.module('myapp.mresturis', [])
    .constant('M_RestURIsService', {
        //Tweets
        SEARCH_TWEETS: 'http://localhost:8080/Twitter/search/username/'
    });
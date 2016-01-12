angular.module('myapp.mresturis', [])
    .constant('M_RestURIsService', {
        //Tweets
        //SEARCH_TWEETS: 'http://localhost:8080/Twitter/search/username/'
        SEARCH_TWEETS: 'http://gae-twitter-app.appspot.com/rest/twitter/search/username/'

    });
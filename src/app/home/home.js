angular.module('myapp.home', [
        'ui.router'
    ])

    .config(function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html',
                data: {pageTitle: 'Home'},
                requireLogin: false
            });
    })

    .controller('HomeCtrl', ['$rootScope', '$scope', '$state', '$q', 'M_UtilsService', 'M_ConstantsService',
        function ($rootScope, $scope, $state, $q, M_UtilsService, M_ConstantsService) {
            //Default Values
            $scope.appdirect = {};
            $scope.appdirect = [{
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 22:56:19 +0000 2016",
                "id": 684146368684900352,
                "id_str": "684146368684900352",
                "text": "AppDirect is looking for: Customer Success Director, EMEA\nhttps:\/\/t.co\/eYCHqj5eA6 #job",
                "source": "\u003ca href=\"http:\/\/jobvite.com\" rel=\"nofollow\"\u003eJobvite\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 16983620,
                    "id_str": "16983620",
                    "name": "fivos",
                    "screen_name": "fivos",
                    "location": "iPhone: 34.946507,33.604031",
                    "description": "",
                    "url": "http:\/\/t.co\/S0Nmpg8cQh",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/S0Nmpg8cQh",
                                "expanded_url": "http:\/\/fivos.cyprusathletics.net",
                                "display_url": "fivos.cyprusathletics.net",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 138,
                    "friends_count": 144,
                    "listed_count": 1,
                    "created_at": "Sun Oct 26 18:25:46 +0000 2008",
                    "favourites_count": 10,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 415,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "9AE4E8",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/483292310176677888\/kn-RKhB2_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/483292310176677888\/kn-RKhB2_normal.jpeg",
                    "profile_link_color": "0000FF",
                    "profile_sidebar_border_color": "87BC44",
                    "profile_sidebar_fill_color": "E0FF92",
                    "profile_text_color": "000000",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "job",
                        "indices": [82, 86]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/eYCHqj5eA6",
                        "expanded_url": "http:\/\/app.jobvite.com\/m?3JCIKhwz",
                        "display_url": "app.jobvite.com\/m?3JCIKhwz",
                        "indices": [58, 81]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 22:17:40 +0000 2016",
                "id": 684136640520966144,
                "id_str": "684136640520966144",
                "text": "\"Passionate, hard-working, brilliant co-workers + leadership. I love coming to work every day.\" https:\/\/t.co\/JqsElT21R6 @AppDirect",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 400451730,
                    "id_str": "400451730",
                    "name": "Carolyn Cuykendall",
                    "screen_name": "cuykendallc",
                    "location": "San Francisco, CA",
                    "description": "|'|",
                    "url": "http:\/\/t.co\/zqTCyCg8hh",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/zqTCyCg8hh",
                                "expanded_url": "http:\/\/www.carolyncuykendall.com",
                                "display_url": "carolyncuykendall.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 32,
                    "friends_count": 141,
                    "listed_count": 2,
                    "created_at": "Sat Oct 29 02:07:01 +0000 2011",
                    "favourites_count": 32,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 22,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/684137924292558848\/Zhoyo1rx_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/684137924292558848\/Zhoyo1rx_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/400451730\/1451947830",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 1,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [120, 130]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/JqsElT21R6",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [96, 119]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 21:52:38 +0000 2016",
                "id": 684130340596756480,
                "id_str": "684130340596756480",
                "text": "[Jobs] Looking for Sr. Java Developer \nhttps:\/\/t.co\/oqSDkx75Uv #job",
                "source": "\u003ca href=\"http:\/\/jobvite.com\" rel=\"nofollow\"\u003eJobvite\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 154310289,
                    "id_str": "154310289",
                    "name": "AppDirect",
                    "screen_name": "AppDirect",
                    "location": "San Francisco, California",
                    "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http:\/\/t.co\/qgUGIQMnlv",
                    "url": "http:\/\/t.co\/MRppRP4Ckl",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/MRppRP4Ckl",
                                "expanded_url": "http:\/\/appdirect.com",
                                "display_url": "appdirect.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "http:\/\/t.co\/qgUGIQMnlv",
                                "expanded_url": "http:\/\/info.appdirect.com\/about\/careers",
                                "display_url": "info.appdirect.com\/about\/careers",
                                "indices": [91, 113]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 1576,
                    "friends_count": 471,
                    "listed_count": 108,
                    "created_at": "Thu Jun 10 22:46:57 +0000 2010",
                    "favourites_count": 482,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3392,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "2D2A26",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/154310289\/1447807167",
                    "profile_link_color": "009ABF",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "E7F6FF",
                    "profile_text_color": "333333",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "job",
                        "indices": [63, 67]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/oqSDkx75Uv",
                        "expanded_url": "http:\/\/app.jobvite.com\/m?3KgIKhwe",
                        "display_url": "app.jobvite.com\/m?3KgIKhwe",
                        "indices": [39, 62]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 21:45:14 +0000 2016",
                "id": 684128478698995712,
                "id_str": "684128478698995712",
                "text": "Proud to see @AppDirect listed as one of the best companies to work for! https:\/\/t.co\/8Y5awkO9gD",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 251472203,
                    "id_str": "251472203",
                    "name": "Naomi Mbakwe",
                    "screen_name": "naomimbakwe",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 51,
                    "friends_count": 54,
                    "listed_count": 0,
                    "created_at": "Sun Feb 13 05:57:55 +0000 2011",
                    "favourites_count": 3,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 18,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/2318944070\/image_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/2318944070\/image_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [13, 23]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/8Y5awkO9gD",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [73, 96]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 19:30:06 +0000 2016",
                "id": 684094469809913856,
                "id_str": "684094469809913856",
                "text": "Excited way to start off the new year AppDirect! https:\/\/t.co\/I058us4N2i",
                "source": "\u003ca href=\"http:\/\/www.linkedin.com\/\" rel=\"nofollow\"\u003eLinkedIn\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 96907689,
                    "id_str": "96907689",
                    "name": "Anthony Kline",
                    "screen_name": "aKlizzy",
                    "location": "\u00dcT: 37.77433,-122.399143",
                    "description": "Talent Hunter @AppDirect, Start Up & Technology Aficionado, Avid Networker and Adventurer",
                    "url": "http:\/\/t.co\/ShB7FMkjfD",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/ShB7FMkjfD",
                                "expanded_url": "http:\/\/www.linkedin.com\/in\/anthonykline1\/",
                                "display_url": "linkedin.com\/in\/anthonyklin\u2026",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 346,
                    "friends_count": 251,
                    "listed_count": 24,
                    "created_at": "Tue Dec 15 03:56:01 +0000 2009",
                    "favourites_count": 50,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1268,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "1A1B1F",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/378800000452141603\/23b17f61492617db50b20a7ed9841d17_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/378800000452141603\/23b17f61492617db50b20a7ed9841d17_normal.jpeg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/96907689\/1379090186",
                    "profile_link_color": "2FC2EF",
                    "profile_sidebar_border_color": "181A1E",
                    "profile_sidebar_fill_color": "252429",
                    "profile_text_color": "666666",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/I058us4N2i",
                        "expanded_url": "https:\/\/lnkd.in\/bxGvz6x",
                        "display_url": "lnkd.in\/bxGvz6x",
                        "indices": [49, 72]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 19:15:26 +0000 2016",
                "id": 684090780252684288,
                "id_str": "684090780252684288",
                "text": ".@AppDirect listed as #10 best unicorn to work for according to @businessinsider! https:\/\/t.co\/Sy09rsVfcV",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 175136684,
                    "id_str": "175136684",
                    "name": "Paul Arnautoff",
                    "screen_name": "PaulArnautoff",
                    "location": "San Francisco, CA",
                    "description": "Business Development @ AppDirect. \r\nLove soccer, music, photography and gizmos. Digital pack rat.\r\nhttp:\/\/t.co\/GARvZzhU",
                    "url": "http:\/\/t.co\/e6A86dK4PC",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/e6A86dK4PC",
                                "expanded_url": "http:\/\/about.me\/paul-arnautoff",
                                "display_url": "about.me\/paul-arnautoff",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "http:\/\/t.co\/GARvZzhU",
                                "expanded_url": "http:\/\/About.me\/paul-arnautoff",
                                "display_url": "About.me\/paul-arnautoff",
                                "indices": [99, 119]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 243,
                    "friends_count": 72,
                    "listed_count": 6,
                    "created_at": "Thu Aug 05 18:47:58 +0000 2010",
                    "favourites_count": 9,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 367,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "FFFFFF",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/229592452\/twitter-bg__1_.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/229592452\/twitter-bg__1_.jpg",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/458853026615148544\/tF4AyrSg_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/458853026615148544\/tF4AyrSg_normal.jpeg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/175136684\/1398234323",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "5B8BA3",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [1, 11]
                    }, {
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [64, 80]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/Sy09rsVfcV",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [82, 105]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 18:00:51 +0000 2016",
                "id": 684072009303592960,
                "id_str": "684072009303592960",
                "text": ".@AppDirect listed as #10 best unicorn to work for according to @businessinsider! https:\/\/t.co\/8BHZ9Xyq8Z",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 239177749,
                    "id_str": "239177749",
                    "name": "Alexander Price",
                    "screen_name": "priceoftime",
                    "location": "San Francisco, CA",
                    "description": "BD @AppDirect, @lightbank, @KelloggSchool, politico @hickforco, cold case @DenverDAsOffice",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 60,
                    "friends_count": 143,
                    "listed_count": 1,
                    "created_at": "Mon Jan 17 00:56:43 +0000 2011",
                    "favourites_count": 4,
                    "utc_offset": -21600,
                    "time_zone": "Central Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 30,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/626458211609018368\/1ueQD7ou_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/626458211609018368\/1ueQD7ou_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [1, 11]
                    }, {
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [64, 80]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/8BHZ9Xyq8Z",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [82, 105]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 17:48:31 +0000 2016",
                "id": 684068907997515776,
                "id_str": "684068907997515776",
                "text": "@AppDirect listed as #10 best unicorn to work for according to @businessinsider! https:\/\/t.co\/ZdMX3xOFu3",
                "source": "\u003ca href=\"http:\/\/twitter.com\/download\/android\" rel=\"nofollow\"\u003eTwitter for Android\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": 154310289,
                "in_reply_to_user_id_str": "154310289",
                "in_reply_to_screen_name": "AppDirect",
                "user": {
                    "id": 618373478,
                    "id_str": "618373478",
                    "name": "Jasper Jon Crocker",
                    "screen_name": "jaspercrocker",
                    "location": "San Francisco",
                    "description": "Product Manager at AppDirect.",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 8,
                    "friends_count": 53,
                    "listed_count": 1,
                    "created_at": "Mon Jun 25 19:38:04 +0000 2012",
                    "favourites_count": 15,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 34,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "1A1B1F",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/424619192105463808\/w3b_QzBG_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/424619192105463808\/w3b_QzBG_normal.jpeg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/618373478\/1390071743",
                    "profile_link_color": "2FC2EF",
                    "profile_sidebar_border_color": "181A1E",
                    "profile_sidebar_fill_color": "252429",
                    "profile_text_color": "666666",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [0, 10]
                    }, {
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [63, 79]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/ZdMX3xOFu3",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [81, 104]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 16:35:57 +0000 2016",
                "id": 684050644244774912,
                "id_str": "684050644244774912",
                "text": "RT @KFunn: \"Passionate, hard-working, brilliant co-workers + leadership. I love coming to work every day.\"  https:\/\/t.co\/nJsAcMou1p @AppDir\u2026",
                "source": "\u003ca href=\"http:\/\/www.hubspot.com\/\" rel=\"nofollow\"\u003eHubSpot\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 154310289,
                    "id_str": "154310289",
                    "name": "AppDirect",
                    "screen_name": "AppDirect",
                    "location": "San Francisco, California",
                    "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http:\/\/t.co\/qgUGIQMnlv",
                    "url": "http:\/\/t.co\/MRppRP4Ckl",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/MRppRP4Ckl",
                                "expanded_url": "http:\/\/appdirect.com",
                                "display_url": "appdirect.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "http:\/\/t.co\/qgUGIQMnlv",
                                "expanded_url": "http:\/\/info.appdirect.com\/about\/careers",
                                "display_url": "info.appdirect.com\/about\/careers",
                                "indices": [91, 113]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 1576,
                    "friends_count": 471,
                    "listed_count": 108,
                    "created_at": "Thu Jun 10 22:46:57 +0000 2010",
                    "favourites_count": 482,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3392,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "2D2A26",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/154310289\/1447807167",
                    "profile_link_color": "009ABF",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "E7F6FF",
                    "profile_text_color": "333333",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Fri Jan 01 22:34:58 +0000 2016",
                    "id": 683053831643643905,
                    "id_str": "683053831643643905",
                    "text": "\"Passionate, hard-working, brilliant co-workers + leadership. I love coming to work every day.\"  https:\/\/t.co\/nJsAcMou1p @AppDirect",
                    "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 16299153,
                        "id_str": "16299153",
                        "name": "Kelsey Dunn",
                        "screen_name": "KFunn",
                        "location": "San Francisco, CA",
                        "description": "Recruiter @AppDirect and @EBXSF No.1 Fan",
                        "url": "https:\/\/t.co\/iX8uBMr3CN",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https:\/\/t.co\/iX8uBMr3CN",
                                    "expanded_url": "https:\/\/soundcloud.com\/kbfunn",
                                    "display_url": "soundcloud.com\/kbfunn",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 325,
                        "friends_count": 990,
                        "listed_count": 9,
                        "created_at": "Mon Sep 15 18:12:34 +0000 2008",
                        "favourites_count": 231,
                        "utc_offset": -28800,
                        "time_zone": "Pacific Time (US & Canada)",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 1138,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "000000",
                        "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme6\/bg.gif",
                        "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme6\/bg.gif",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/679529713870700544\/qBYpfHge_normal.png",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/679529713870700544\/qBYpfHge_normal.png",
                        "profile_link_color": "000000",
                        "profile_sidebar_border_color": "000000",
                        "profile_sidebar_fill_color": "000000",
                        "profile_text_color": "000000",
                        "profile_use_background_image": false,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 4,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "AppDirect",
                            "name": "AppDirect",
                            "id": 154310289,
                            "id_str": "154310289",
                            "indices": [121, 131]
                        }],
                        "urls": [{
                            "url": "https:\/\/t.co\/nJsAcMou1p",
                            "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                            "display_url": "read.bi\/1VqfcBO",
                            "indices": [97, 120]
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "KFunn",
                        "name": "Kelsey Dunn",
                        "id": 16299153,
                        "id_str": "16299153",
                        "indices": [3, 9]
                    }, {
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [132, 140]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/nJsAcMou1p",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [108, 131]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 14:33:50 +0000 2016",
                "id": 684019913711837186,
                "id_str": "684019913711837186",
                "text": "@AppDirect listed as #10 best unicorn to work for according to @businessinsider https:\/\/t.co\/UQWbf8YLps",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": 154310289,
                "in_reply_to_user_id_str": "154310289",
                "in_reply_to_screen_name": "AppDirect",
                "user": {
                    "id": 66127202,
                    "id_str": "66127202",
                    "name": "Tristan Tran",
                    "screen_name": "tristanbbq",
                    "location": "Montr\u00e9al, Qu\u00e9bec",
                    "description": "Passionate about Software Engineering and Technology",
                    "url": "http:\/\/t.co\/Rh1Jms4HEw",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/Rh1Jms4HEw",
                                "expanded_url": "http:\/\/www.tristantran.me",
                                "display_url": "tristantran.me",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 230,
                    "friends_count": 737,
                    "listed_count": 18,
                    "created_at": "Sun Aug 16 14:56:27 +0000 2009",
                    "favourites_count": 60,
                    "utc_offset": -18000,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1694,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "131516",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/626218739768242176\/ha5cZ9kb_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/626218739768242176\/ha5cZ9kb_normal.jpg",
                    "profile_link_color": "0C1F33",
                    "profile_sidebar_border_color": "8880F2",
                    "profile_sidebar_fill_color": "D6DEEB",
                    "profile_text_color": "000000",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 1,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [0, 10]
                    }, {
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [63, 79]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/UQWbf8YLps",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [80, 103]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 13:45:16 +0000 2016",
                "id": 684007692332044288,
                "id_str": "684007692332044288",
                "text": "Proud to see @AppDirect listed as one of the best companies to work for! https:\/\/t.co\/t5fFLuVdLb",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 49842098,
                    "id_str": "49842098",
                    "name": "Alexandre Gervais",
                    "screen_name": "alex_gervais",
                    "location": "Montreal, Qc",
                    "description": "Hi!, I'm Alexandre Gervais - software engineer, eternal student and metalhead",
                    "url": "https:\/\/t.co\/zGtArHWQ04",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/zGtArHWQ04",
                                "expanded_url": "https:\/\/github.com\/alexgervais\/",
                                "display_url": "github.com\/alexgervais\/",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 87,
                    "friends_count": 161,
                    "listed_count": 6,
                    "created_at": "Tue Jun 23 01:34:24 +0000 2009",
                    "favourites_count": 98,
                    "utc_offset": -18000,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 160,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "131516",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/378800000475769290\/4431233abbd99def675fb3e0793bb7dd_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/378800000475769290\/4431233abbd99def675fb3e0793bb7dd_normal.jpeg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/49842098\/1368749537",
                    "profile_link_color": "009999",
                    "profile_sidebar_border_color": "EEEEEE",
                    "profile_sidebar_fill_color": "EFEFEF",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 1,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [13, 23]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/t5fFLuVdLb",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [73, 96]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Jan 04 08:45:33 +0000 2016",
                "id": 683932265987076097,
                "id_str": "683932265987076097",
                "text": ".@AppDirect listed as #10 best unicorn to work for according to @businessinsider! https:\/\/t.co\/e46f4I6rlS",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 199141758,
                    "id_str": "199141758",
                    "name": "Nessim Djerboua",
                    "screen_name": "djerboua",
                    "location": "San Francisco",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 138,
                    "friends_count": 67,
                    "listed_count": 5,
                    "created_at": "Wed Oct 06 03:55:27 +0000 2010",
                    "favourites_count": 28,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 248,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/519861982271246336\/n1QP5H-7_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/519861982271246336\/n1QP5H-7_normal.jpeg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [1, 11]
                    }, {
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [64, 80]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/e46f4I6rlS",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [82, 105]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Sat Jan 02 21:50:07 +0000 2016",
                "id": 683404932981125120,
                "id_str": "683404932981125120",
                "text": "AppDirect is looking for: Backend Developer - EMEA, Munich\nhttps:\/\/t.co\/H6VpNf9SCU #job",
                "source": "\u003ca href=\"http:\/\/jobvite.com\" rel=\"nofollow\"\u003eJobvite\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 154310289,
                    "id_str": "154310289",
                    "name": "AppDirect",
                    "screen_name": "AppDirect",
                    "location": "San Francisco, California",
                    "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http:\/\/t.co\/qgUGIQMnlv",
                    "url": "http:\/\/t.co\/MRppRP4Ckl",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/MRppRP4Ckl",
                                "expanded_url": "http:\/\/appdirect.com",
                                "display_url": "appdirect.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "http:\/\/t.co\/qgUGIQMnlv",
                                "expanded_url": "http:\/\/info.appdirect.com\/about\/careers",
                                "display_url": "info.appdirect.com\/about\/careers",
                                "indices": [91, 113]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 1576,
                    "friends_count": 471,
                    "listed_count": 108,
                    "created_at": "Thu Jun 10 22:46:57 +0000 2010",
                    "favourites_count": 482,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3392,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "2D2A26",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/154310289\/1447807167",
                    "profile_link_color": "009ABF",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "E7F6FF",
                    "profile_text_color": "333333",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "job",
                        "indices": [83, 87]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/H6VpNf9SCU",
                        "expanded_url": "http:\/\/app.jobvite.com\/m?3FLzKhwv",
                        "display_url": "app.jobvite.com\/m?3FLzKhwv",
                        "indices": [59, 82]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Fri Jan 01 22:34:58 +0000 2016",
                "id": 683053831643643905,
                "id_str": "683053831643643905",
                "text": "\"Passionate, hard-working, brilliant co-workers + leadership. I love coming to work every day.\"  https:\/\/t.co\/nJsAcMou1p @AppDirect",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 16299153,
                    "id_str": "16299153",
                    "name": "Kelsey Dunn",
                    "screen_name": "KFunn",
                    "location": "San Francisco, CA",
                    "description": "Recruiter @AppDirect and @EBXSF No.1 Fan",
                    "url": "https:\/\/t.co\/iX8uBMr3CN",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/iX8uBMr3CN",
                                "expanded_url": "https:\/\/soundcloud.com\/kbfunn",
                                "display_url": "soundcloud.com\/kbfunn",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 325,
                    "friends_count": 990,
                    "listed_count": 9,
                    "created_at": "Mon Sep 15 18:12:34 +0000 2008",
                    "favourites_count": 231,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 1138,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme6\/bg.gif",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme6\/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/679529713870700544\/qBYpfHge_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/679529713870700544\/qBYpfHge_normal.png",
                    "profile_link_color": "000000",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 4,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [121, 131]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/nJsAcMou1p",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [97, 120]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Fri Jan 01 12:50:39 +0000 2016",
                "id": 682906781341880320,
                "id_str": "682906781341880320",
                "text": "Cloud Banking Daily is out! https:\/\/t.co\/Ya3mmWi2T2 Stories via @AbdullahAleid @OraLicencePro @AppDirect",
                "source": "\u003ca href=\"http:\/\/paper.li\" rel=\"nofollow\"\u003ePaper.li\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2771481534,
                    "id_str": "2771481534",
                    "name": "Cloud in FS",
                    "screen_name": "CloudInFS",
                    "location": "London, England",
                    "description": "The place to meet, debate & further knowledge on the transformational potential of migrating IT financial services & systems to the cloud\nhttp:\/\/t.co\/c5BBvvWeGI",
                    "url": "http:\/\/t.co\/v2hLU7zlL9",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/v2hLU7zlL9",
                                "expanded_url": "http:\/\/www.cloudfsworldseries.com",
                                "display_url": "cloudfsworldseries.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "http:\/\/t.co\/c5BBvvWeGI",
                                "expanded_url": "http:\/\/cloudfsamericas.com",
                                "display_url": "cloudfsamericas.com",
                                "indices": [138, 160]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 423,
                    "friends_count": 370,
                    "listed_count": 79,
                    "created_at": "Tue Aug 26 22:39:49 +0000 2014",
                    "favourites_count": 159,
                    "utc_offset": 0,
                    "time_zone": "Dublin",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1320,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/591524074771324928\/GPTYYPjc_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/591524074771324928\/GPTYYPjc_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/2771481534\/1429867650",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AbdullahAleid",
                        "name": "Abdullah Aleid",
                        "id": 101173157,
                        "id_str": "101173157",
                        "indices": [64, 78]
                    }, {
                        "screen_name": "OraLicencePro",
                        "name": "Kay",
                        "id": 2245766810,
                        "id_str": "2245766810",
                        "indices": [79, 93]
                    }, {
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [94, 104]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/Ya3mmWi2T2",
                        "expanded_url": "http:\/\/paper.li\/cloud_banking\/1409230048?edition_id=41a72f10-b086-11e5-b5fd-002590a5ba2d",
                        "display_url": "paper.li\/cloud_banking\/\u2026",
                        "indices": [28, 51]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Fri Jan 01 09:52:38 +0000 2016",
                "id": 682861983679574016,
                "id_str": "682861983679574016",
                "text": "[Jobs] Looking for Frontend Developer - Montreal \nhttps:\/\/t.co\/hSkxgulhu5 #job",
                "source": "\u003ca href=\"http:\/\/jobvite.com\" rel=\"nofollow\"\u003eJobvite\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 154310289,
                    "id_str": "154310289",
                    "name": "AppDirect",
                    "screen_name": "AppDirect",
                    "location": "San Francisco, California",
                    "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http:\/\/t.co\/qgUGIQMnlv",
                    "url": "http:\/\/t.co\/MRppRP4Ckl",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/MRppRP4Ckl",
                                "expanded_url": "http:\/\/appdirect.com",
                                "display_url": "appdirect.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "http:\/\/t.co\/qgUGIQMnlv",
                                "expanded_url": "http:\/\/info.appdirect.com\/about\/careers",
                                "display_url": "info.appdirect.com\/about\/careers",
                                "indices": [91, 113]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 1576,
                    "friends_count": 471,
                    "listed_count": 108,
                    "created_at": "Thu Jun 10 22:46:57 +0000 2010",
                    "favourites_count": 482,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3392,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "2D2A26",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/154310289\/1447807167",
                    "profile_link_color": "009ABF",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "E7F6FF",
                    "profile_text_color": "333333",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 2,
                "favorite_count": 1,
                "entities": {
                    "hashtags": [{
                        "text": "job",
                        "indices": [74, 78]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/hSkxgulhu5",
                        "expanded_url": "http:\/\/app.jobvite.com\/m?3RIuKhwz",
                        "display_url": "app.jobvite.com\/m?3RIuKhwz",
                        "indices": [50, 73]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Thu Dec 31 16:51:35 +0000 2015",
                "id": 682605028666949633,
                "id_str": "682605028666949633",
                "text": "@AppDirect listed as #10 best unicorn to work for by @businessinsider! I can't argue with that. #ilovemyjob https:\/\/t.co\/NsB8jDyEFs",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": 154310289,
                "in_reply_to_user_id_str": "154310289",
                "in_reply_to_screen_name": "AppDirect",
                "user": {
                    "id": 4270550653,
                    "id_str": "4270550653",
                    "name": "Sarah Beattie",
                    "screen_name": "AppDirectBeats",
                    "location": "San Francisco, CA",
                    "description": "Strategic Alliances @AppDirect. \nDaily Beats.",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 44,
                    "friends_count": 177,
                    "listed_count": 6,
                    "created_at": "Tue Nov 17 18:41:19 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 23,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/667811736645320704\/PQYJ88u3_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/667811736645320704\/PQYJ88u3_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/4270550653\/1447786586",
                    "profile_link_color": "133A4E",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 1,
                "entities": {
                    "hashtags": [{
                        "text": "ilovemyjob",
                        "indices": [96, 107]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [0, 10]
                    }, {
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [53, 69]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/NsB8jDyEFs",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [108, 131]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Thu Dec 31 16:49:57 +0000 2015",
                "id": 682604615574142977,
                "id_str": "682604615574142977",
                "text": "\"Passionate, hard-working, brilliant co-workers + leadership. I love coming to work every day.\"  https:\/\/t.co\/NsB8jDyEFs @AppDirect",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 4270550653,
                    "id_str": "4270550653",
                    "name": "Sarah Beattie",
                    "screen_name": "AppDirectBeats",
                    "location": "San Francisco, CA",
                    "description": "Strategic Alliances @AppDirect. \nDaily Beats.",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 44,
                    "friends_count": 177,
                    "listed_count": 6,
                    "created_at": "Tue Nov 17 18:41:19 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 23,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/667811736645320704\/PQYJ88u3_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/667811736645320704\/PQYJ88u3_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/4270550653\/1447786586",
                    "profile_link_color": "133A4E",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [121, 131]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/NsB8jDyEFs",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [97, 120]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Thu Dec 31 01:15:56 +0000 2015",
                "id": 682369564089421824,
                "id_str": "682369564089421824",
                "text": "\"Passionate, hard-working, brilliant co-workers + leadership. I love coming to work every day.\"  https:\/\/t.co\/A9pW8WzRIG @AppDirect",
                "source": "\u003ca href=\"http:\/\/www.echofon.com\/\" rel=\"nofollow\"\u003eEchofon\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 114957641,
                    "id_str": "114957641",
                    "name": "Yan Avery",
                    "screen_name": "yanavery",
                    "location": "Montreal, Quebec, Canada",
                    "description": "Staff Software Engineer @ AppDirect - I'm also a technology geek and enthusiast. I develop web and iOS applications both professionally and in my spare time.",
                    "url": "http:\/\/t.co\/hNlY0NXRAJ",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/hNlY0NXRAJ",
                                "expanded_url": "http:\/\/yanavery.com",
                                "display_url": "yanavery.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1384,
                    "friends_count": 345,
                    "listed_count": 79,
                    "created_at": "Wed Feb 17 04:22:57 +0000 2010",
                    "favourites_count": 0,
                    "utc_offset": -18000,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3827,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "090907",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/189301839\/x81075c8bc55d8bf196eff92d67b5e70.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/189301839\/x81075c8bc55d8bf196eff92d67b5e70.jpg",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/1574605024\/Yan_2_-_headshot_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/1574605024\/Yan_2_-_headshot_normal.png",
                    "profile_link_color": "466AA8",
                    "profile_sidebar_border_color": "466AA8",
                    "profile_sidebar_fill_color": "090907",
                    "profile_text_color": "2A4361",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [121, 131]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/A9pW8WzRIG",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [97, 120]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Thu Dec 31 00:35:05 +0000 2015",
                "id": 682359284169076737,
                "id_str": "682359284169076737",
                "text": "Honored to see @AppDirect listed as one of the best places to work by @businessinsider! https:\/\/t.co\/lPVNouGaT7",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 251849264,
                    "id_str": "251849264",
                    "name": "Daniel Saks",
                    "screen_name": "danielsaks",
                    "location": "San Francisco",
                    "description": "Co-Founder of @appdirect - where businesses find, buy, and use web applications.  I tweet about #smallbusiness #cloud #saas #startup",
                    "url": "http:\/\/t.co\/JEfLTUxKd5",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/JEfLTUxKd5",
                                "expanded_url": "http:\/\/about.me\/danielsaks",
                                "display_url": "about.me\/danielsaks",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 777,
                    "friends_count": 211,
                    "listed_count": 54,
                    "created_at": "Mon Feb 14 00:00:54 +0000 2011",
                    "favourites_count": 21,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 280,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/418811193180962816\/o0_WTaAo_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/418811193180962816\/o0_WTaAo_normal.png",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 6,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [15, 25]
                    }, {
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [70, 86]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/lPVNouGaT7",
                        "expanded_url": "http:\/\/www.businessinsider.com\/the-20-best-unicorn-startups-to-work-for-2015-12",
                        "display_url": "businessinsider.com\/the-20-best-un\u2026",
                        "indices": [88, 111]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Dec 30 22:36:45 +0000 2015",
                "id": 682329502102364160,
                "id_str": "682329502102364160",
                "text": "RT @aKlizzy: AppDirect is looking for: Customer Success Director, EMEA\nhttps:\/\/t.co\/rpbZAaDWAM #job",
                "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 105297892,
                    "id_str": "105297892",
                    "name": "Andy Ellerhorst",
                    "screen_name": "aellerhorst",
                    "location": "San Francisco",
                    "description": "@appdirect, @luvocracy",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 235,
                    "friends_count": 245,
                    "listed_count": 9,
                    "created_at": "Fri Jan 15 23:41:23 +0000 2010",
                    "favourites_count": 87,
                    "utc_offset": -18000,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 786,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/615738418392203264\/TS7epWut_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/615738418392203264\/TS7epWut_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/105297892\/1436630987",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Dec 30 18:55:52 +0000 2015",
                    "id": 682273918648979456,
                    "id_str": "682273918648979456",
                    "text": "AppDirect is looking for: Customer Success Director, EMEA\nhttps:\/\/t.co\/rpbZAaDWAM #job",
                    "source": "\u003ca href=\"http:\/\/jobvite.com\" rel=\"nofollow\"\u003eJobvite\u003c\/a\u003e",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 96907689,
                        "id_str": "96907689",
                        "name": "Anthony Kline",
                        "screen_name": "aKlizzy",
                        "location": "\u00dcT: 37.77433,-122.399143",
                        "description": "Talent Hunter @AppDirect, Start Up & Technology Aficionado, Avid Networker and Adventurer",
                        "url": "http:\/\/t.co\/ShB7FMkjfD",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http:\/\/t.co\/ShB7FMkjfD",
                                    "expanded_url": "http:\/\/www.linkedin.com\/in\/anthonykline1\/",
                                    "display_url": "linkedin.com\/in\/anthonyklin\u2026",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 346,
                        "friends_count": 251,
                        "listed_count": 24,
                        "created_at": "Tue Dec 15 03:56:01 +0000 2009",
                        "favourites_count": 50,
                        "utc_offset": null,
                        "time_zone": null,
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 1268,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "1A1B1F",
                        "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif",
                        "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/378800000452141603\/23b17f61492617db50b20a7ed9841d17_normal.jpeg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/378800000452141603\/23b17f61492617db50b20a7ed9841d17_normal.jpeg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/96907689\/1379090186",
                        "profile_link_color": "2FC2EF",
                        "profile_sidebar_border_color": "181A1E",
                        "profile_sidebar_fill_color": "252429",
                        "profile_text_color": "666666",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 1,
                    "entities": {
                        "hashtags": [{
                            "text": "job",
                            "indices": [82, 86]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https:\/\/t.co\/rpbZAaDWAM",
                            "expanded_url": "http:\/\/app.jobvite.com\/m?3lJnKhwX",
                            "display_url": "app.jobvite.com\/m?3lJnKhwX",
                            "indices": [58, 81]
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "job",
                        "indices": [95, 99]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "aKlizzy",
                        "name": "Anthony Kline",
                        "id": 96907689,
                        "id_str": "96907689",
                        "indices": [3, 11]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/rpbZAaDWAM",
                        "expanded_url": "http:\/\/app.jobvite.com\/m?3lJnKhwX",
                        "display_url": "app.jobvite.com\/m?3lJnKhwX",
                        "indices": [71, 94]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Dec 30 22:36:36 +0000 2015",
                "id": 682329467012775937,
                "id_str": "682329467012775937",
                "text": "RT @Duftydownunder: .@AppDirect listed as #10 best unicorn to work for according to @businessinsider! https:\/\/t.co\/2TxakMkkAG",
                "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 105297892,
                    "id_str": "105297892",
                    "name": "Andy Ellerhorst",
                    "screen_name": "aellerhorst",
                    "location": "San Francisco",
                    "description": "@appdirect, @luvocracy",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 235,
                    "friends_count": 245,
                    "listed_count": 9,
                    "created_at": "Fri Jan 15 23:41:23 +0000 2010",
                    "favourites_count": 87,
                    "utc_offset": -18000,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 786,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/615738418392203264\/TS7epWut_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/615738418392203264\/TS7epWut_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/105297892\/1436630987",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Dec 30 21:44:30 +0000 2015",
                    "id": 682316353982853120,
                    "id_str": "682316353982853120",
                    "text": ".@AppDirect listed as #10 best unicorn to work for according to @businessinsider! https:\/\/t.co\/2TxakMkkAG",
                    "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2153636384,
                        "id_str": "2153636384",
                        "name": "Richard Dufty",
                        "screen_name": "Duftydownunder",
                        "location": "California",
                        "description": "VP Global Sales @ AppDirect. Aussie living in US.Global Traveler. Love all things cloud & hitting the beach in SoCal, Sydney or @ our HQ in San Francisco",
                        "url": "http:\/\/t.co\/VpPUTiGu6q",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http:\/\/t.co\/VpPUTiGu6q",
                                    "expanded_url": "http:\/\/www.appdirect.com",
                                    "display_url": "appdirect.com",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 208,
                        "friends_count": 167,
                        "listed_count": 16,
                        "created_at": "Thu Oct 24 20:47:02 +0000 2013",
                        "favourites_count": 104,
                        "utc_offset": null,
                        "time_zone": null,
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 325,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                        "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/467094727766978560\/iJE_k94N_normal.jpeg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/467094727766978560\/iJE_k94N_normal.jpeg",
                        "profile_link_color": "0083B3",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 1,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "AppDirect",
                            "name": "AppDirect",
                            "id": 154310289,
                            "id_str": "154310289",
                            "indices": [1, 11]
                        }, {
                            "screen_name": "businessinsider",
                            "name": "Business Insider",
                            "id": 20562637,
                            "id_str": "20562637",
                            "indices": [64, 80]
                        }],
                        "urls": [{
                            "url": "https:\/\/t.co\/2TxakMkkAG",
                            "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                            "display_url": "read.bi\/1VqfcBO",
                            "indices": [82, 105]
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "Duftydownunder",
                        "name": "Richard Dufty",
                        "id": 2153636384,
                        "id_str": "2153636384",
                        "indices": [3, 18]
                    }, {
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [21, 31]
                    }, {
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [84, 100]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/2TxakMkkAG",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [102, 125]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Dec 30 22:01:29 +0000 2015",
                "id": 682320627018108928,
                "id_str": "682320627018108928",
                "text": "Proud to see @AppDirect listed as one of the best companies to work for! https:\/\/t.co\/ZQYcWGXc0X",
                "source": "\u003ca href=\"http:\/\/twitter.com\/download\/android\" rel=\"nofollow\"\u003eTwitter for Android\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 16556333,
                    "id_str": "16556333",
                    "name": "Isaak Hayes",
                    "screen_name": "isaakhayes",
                    "location": "Palo Alto, CA",
                    "description": "Product Design @AppDirect, entrepreneur, advisor, mentor, creator, and problem solver. Lover of tech, business, design, investing, EdTech & the gym.",
                    "url": "http:\/\/t.co\/zCVMWzCCHq",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/zCVMWzCCHq",
                                "expanded_url": "http:\/\/ihcreative.com",
                                "display_url": "ihcreative.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 362,
                    "friends_count": 263,
                    "listed_count": 31,
                    "created_at": "Thu Oct 02 06:35:43 +0000 2008",
                    "favourites_count": 717,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1207,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "131516",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/439530893103734784\/R3Dcb1X9.jpeg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/439530893103734784\/R3Dcb1X9.jpeg",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/378800000615713100\/a6a63029d301a0b360c444754b5157b0_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/378800000615713100\/a6a63029d301a0b360c444754b5157b0_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/16556333\/1397280015",
                    "profile_link_color": "ABB8C2",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "C0DFEC",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [13, 23]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/ZQYcWGXc0X",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [73, 96]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Dec 30 21:57:36 +0000 2015",
                "id": 682319650697416704,
                "id_str": "682319650697416704",
                "text": ".@AppDirect listed as #10 best unicorn to work for according to @businessinsider! https:\/\/t.co\/aVpGYlMw8F",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 117419011,
                    "id_str": "117419011",
                    "name": "Avi Ryan",
                    "screen_name": "AviRyan",
                    "location": "San Francisco- Bay Area, CA",
                    "description": "",
                    "url": "http:\/\/t.co\/X7gjV2Lijq",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/X7gjV2Lijq",
                                "expanded_url": "http:\/\/www.linkedin.com\/in\/aviryan",
                                "display_url": "linkedin.com\/in\/aviryan",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 96,
                    "friends_count": 135,
                    "listed_count": 5,
                    "created_at": "Thu Feb 25 14:13:59 +0000 2010",
                    "favourites_count": 14,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 300,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/505476125837893634\/rgIwTzjy_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/505476125837893634\/rgIwTzjy_normal.jpeg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/117419011\/1434139738",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [1, 11]
                    }, {
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [64, 80]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/aVpGYlMw8F",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [82, 105]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Dec 30 21:56:58 +0000 2015",
                "id": 682319494287650816,
                "id_str": "682319494287650816",
                "text": "Proud to see @AppDirect listed as one of the best companies to work for! https:\/\/t.co\/kmj67rnz02",
                "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 1669723351,
                    "id_str": "1669723351",
                    "name": "Elliot Curtis",
                    "screen_name": "ElliotDCurtis",
                    "location": "The Emerald City",
                    "description": "Hosting, Cloud and tech industry business\/sales\/marketing fanatic. Leadership development dabbler. Culture eats strategy for lunch.",
                    "url": "http:\/\/t.co\/VpPUTiFWgS",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/VpPUTiFWgS",
                                "expanded_url": "http:\/\/www.appdirect.com",
                                "display_url": "appdirect.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1000,
                    "friends_count": 1673,
                    "listed_count": 39,
                    "created_at": "Wed Aug 14 06:34:10 +0000 2013",
                    "favourites_count": 20,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 1160,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/378800000303286320\/b6bc1c0bb72e4026828b459dd453a138_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/378800000303286320\/b6bc1c0bb72e4026828b459dd453a138_normal.jpeg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/1669723351\/1383957559",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 3,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [13, 23]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/kmj67rnz02",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [73, 96]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Dec 30 21:45:26 +0000 2015",
                "id": 682316588419264514,
                "id_str": "682316588419264514",
                "text": "Honored to be listed #10 on @businessinsider's list of top 20 unicorn companies to work for! https:\/\/t.co\/4m8mid2Inn",
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 154310289,
                    "id_str": "154310289",
                    "name": "AppDirect",
                    "screen_name": "AppDirect",
                    "location": "San Francisco, California",
                    "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http:\/\/t.co\/qgUGIQMnlv",
                    "url": "http:\/\/t.co\/MRppRP4Ckl",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/MRppRP4Ckl",
                                "expanded_url": "http:\/\/appdirect.com",
                                "display_url": "appdirect.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "http:\/\/t.co\/qgUGIQMnlv",
                                "expanded_url": "http:\/\/info.appdirect.com\/about\/careers",
                                "display_url": "info.appdirect.com\/about\/careers",
                                "indices": [91, 113]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 1576,
                    "friends_count": 471,
                    "listed_count": 108,
                    "created_at": "Thu Jun 10 22:46:57 +0000 2010",
                    "favourites_count": 482,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3392,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "2D2A26",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/154310289\/1447807167",
                    "profile_link_color": "009ABF",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "E7F6FF",
                    "profile_text_color": "333333",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 2,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [28, 44]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/4m8mid2Inn",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [93, 116]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Dec 30 21:44:30 +0000 2015",
                "id": 682316353982853120,
                "id_str": "682316353982853120",
                "text": ".@AppDirect listed as #10 best unicorn to work for according to @businessinsider! https:\/\/t.co\/2TxakMkkAG",
                "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2153636384,
                    "id_str": "2153636384",
                    "name": "Richard Dufty",
                    "screen_name": "Duftydownunder",
                    "location": "California",
                    "description": "VP Global Sales @ AppDirect. Aussie living in US.Global Traveler. Love all things cloud & hitting the beach in SoCal, Sydney or @ our HQ in San Francisco",
                    "url": "http:\/\/t.co\/VpPUTiGu6q",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/VpPUTiGu6q",
                                "expanded_url": "http:\/\/www.appdirect.com",
                                "display_url": "appdirect.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 208,
                    "friends_count": 167,
                    "listed_count": 16,
                    "created_at": "Thu Oct 24 20:47:02 +0000 2013",
                    "favourites_count": 104,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 325,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/467094727766978560\/iJE_k94N_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/467094727766978560\/iJE_k94N_normal.jpeg",
                    "profile_link_color": "0083B3",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 1,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [1, 11]
                    }, {
                        "screen_name": "businessinsider",
                        "name": "Business Insider",
                        "id": 20562637,
                        "id_str": "20562637",
                        "indices": [64, 80]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/2TxakMkkAG",
                        "expanded_url": "http:\/\/read.bi\/1VqfcBO",
                        "display_url": "read.bi\/1VqfcBO",
                        "indices": [82, 105]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Dec 30 18:55:52 +0000 2015",
                "id": 682273918648979456,
                "id_str": "682273918648979456",
                "text": "AppDirect is looking for: Customer Success Director, EMEA\nhttps:\/\/t.co\/rpbZAaDWAM #job",
                "source": "\u003ca href=\"http:\/\/jobvite.com\" rel=\"nofollow\"\u003eJobvite\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 96907689,
                    "id_str": "96907689",
                    "name": "Anthony Kline",
                    "screen_name": "aKlizzy",
                    "location": "\u00dcT: 37.77433,-122.399143",
                    "description": "Talent Hunter @AppDirect, Start Up & Technology Aficionado, Avid Networker and Adventurer",
                    "url": "http:\/\/t.co\/ShB7FMkjfD",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/ShB7FMkjfD",
                                "expanded_url": "http:\/\/www.linkedin.com\/in\/anthonykline1\/",
                                "display_url": "linkedin.com\/in\/anthonyklin\u2026",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 346,
                    "friends_count": 251,
                    "listed_count": 24,
                    "created_at": "Tue Dec 15 03:56:01 +0000 2009",
                    "favourites_count": 50,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1268,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "1A1B1F",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/378800000452141603\/23b17f61492617db50b20a7ed9841d17_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/378800000452141603\/23b17f61492617db50b20a7ed9841d17_normal.jpeg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/96907689\/1379090186",
                    "profile_link_color": "2FC2EF",
                    "profile_sidebar_border_color": "181A1E",
                    "profile_sidebar_fill_color": "252429",
                    "profile_text_color": "666666",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 1,
                "entities": {
                    "hashtags": [{
                        "text": "job",
                        "indices": [82, 86]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/rpbZAaDWAM",
                        "expanded_url": "http:\/\/app.jobvite.com\/m?3lJnKhwX",
                        "display_url": "app.jobvite.com\/m?3lJnKhwX",
                        "indices": [58, 81]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Tue Dec 29 22:14:29 +0000 2015",
                "id": 681961511351390209,
                "id_str": "681961511351390209",
                "text": "@AppDirect in the Top 10!\n\nhttps:\/\/t.co\/TZAERYSEmp",
                "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": 154310289,
                "in_reply_to_user_id_str": "154310289",
                "in_reply_to_screen_name": "AppDirect",
                "user": {
                    "id": 791808,
                    "id_str": "791808",
                    "name": "malix",
                    "screen_name": "malix",
                    "location": "montr\u00e9al",
                    "description": "\u827e\u99ac\u4ead Cyber Millennial, Internet Aficionado, Software Guru, Political Amateur, Montreal Lover, Fitness Enthusiast, Pastafarian, Father\nhttp:\/\/t.co\/gvLNFwvtvn",
                    "url": "http:\/\/t.co\/xWPor3Sipo",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/xWPor3Sipo",
                                "expanded_url": "http:\/\/malix.com",
                                "display_url": "malix.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "http:\/\/t.co\/gvLNFwvtvn",
                                "expanded_url": "http:\/\/gplus.to\/malix",
                                "display_url": "gplus.to\/malix",
                                "indices": [133, 155]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 384,
                    "friends_count": 505,
                    "listed_count": 10,
                    "created_at": "Sat Feb 24 01:04:45 +0000 2007",
                    "favourites_count": 370,
                    "utc_offset": -18000,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 4171,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "325481",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/160808627\/malixtwitter.png",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/160808627\/malixtwitter.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/603765685588762624\/YZxpPWr__normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/603765685588762624\/YZxpPWr__normal.jpg",
                    "profile_link_color": "325481",
                    "profile_sidebar_border_color": "162740",
                    "profile_sidebar_fill_color": "D3B58D",
                    "profile_text_color": "162740",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "AppDirect",
                        "name": "AppDirect",
                        "id": 154310289,
                        "id_str": "154310289",
                        "indices": [0, 10]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/TZAERYSEmp",
                        "expanded_url": "http:\/\/www.businessinsider.com\/the-20-best-unicorn-startups-to-work-for-2015-12#\/%23no-17-domo-another-startup-by-a-successful-ceo-4",
                        "display_url": "businessinsider.com\/the-20-best-un\u2026",
                        "indices": [27, 50]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Mon Dec 28 21:52:38 +0000 2015",
                "id": 681593625881526272,
                "id_str": "681593625881526272",
                "text": "[Jobs] Looking for Release Engineer \nhttps:\/\/t.co\/k3nSnqCWky #job",
                "source": "\u003ca href=\"http:\/\/jobvite.com\" rel=\"nofollow\"\u003eJobvite\u003c\/a\u003e",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 154310289,
                    "id_str": "154310289",
                    "name": "AppDirect",
                    "screen_name": "AppDirect",
                    "location": "San Francisco, California",
                    "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http:\/\/t.co\/qgUGIQMnlv",
                    "url": "http:\/\/t.co\/MRppRP4Ckl",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/MRppRP4Ckl",
                                "expanded_url": "http:\/\/appdirect.com",
                                "display_url": "appdirect.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "http:\/\/t.co\/qgUGIQMnlv",
                                "expanded_url": "http:\/\/info.appdirect.com\/about\/careers",
                                "display_url": "info.appdirect.com\/about\/careers",
                                "indices": [91, 113]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 1576,
                    "friends_count": 471,
                    "listed_count": 108,
                    "created_at": "Thu Jun 10 22:46:57 +0000 2010",
                    "favourites_count": 482,
                    "utc_offset": -28800,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3392,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "2D2A26",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/830856509\/0e0fabf0437a68b0fdf92bb3219279a0.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/3430349373\/c10e337e41565eff02758d7fa3a85946_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/154310289\/1447807167",
                    "profile_link_color": "009ABF",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "E7F6FF",
                    "profile_text_color": "333333",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "job",
                        "indices": [61, 65]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/k3nSnqCWky",
                        "expanded_url": "http:\/\/app.jobvite.com\/m?3QfeKhwP",
                        "display_url": "app.jobvite.com\/m?3QfeKhwP",
                        "indices": [37, 60]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }];

            /**
             * Format Create Date
             */
            M_UtilsService.dateFormatter($scope.appdirect, M_ConstantsService.CREATED_AT);

        }]);


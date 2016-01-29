angular.module('templates-app', ['details/details.tpl.html', 'details/edit/edit.tpl.html', 'details/view/view.tpl.html', 'header.tpl.html', 'home/home.tpl.html']);

angular.module("details/details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("details/details.tpl.html",
    "<div ui-view></div>");
}]);

angular.module("details/edit/edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("details/edit/edit.tpl.html",
    "<div id=\"edit\" class=\"row-fluid\">\n" +
    "    <!-- Settings Form -->\n" +
    "    <form class=\"form-horizontal group\" name=\"settingsForm\" id=\"settingsForm\">\n" +
    "        <!-- Tweets From -->\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">Tweets From</label>\n" +
    "\n" +
    "            <div class=\"col-sm-3\">\n" +
    "                <p class=\"input-group\">\n" +
    "                    <input type=\"text\" class=\"form-control\" uib-datepicker-popup=\"MM/dd/yyyy\"\n" +
    "                           ng-model=\"settings.dateSince\"\n" +
    "                           is-open=\"dsOpened\" min-date=\"settings.dsMinDate\" max-date=\"settings.dsMaxDate\"\n" +
    "                           show-weeks=\"false\" datepicker-options=\"dateOptions\" date-disabled=\"\" ng-required=\"true\"/>\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                        <button class=\"btn\" ng-click=\"openDS()\"><i class=\"fa fa-calendar\"></i></button>\n" +
    "                        </span>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- Tweets To -->\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">Tweets To</label>\n" +
    "\n" +
    "            <div class=\"col-sm-3\">\n" +
    "                <p class=\"input-group\">\n" +
    "                    <input type=\"text\" class=\"form-control\" uib-datepicker-popup=\"MM/dd/yyyy\"\n" +
    "                           ng-model=\"settings.dateUntil\"\n" +
    "                           is-open=\"duOpened\" min-date=\"settings.duMinDate\" max-date=\"settings.duMaxDate\"\n" +
    "                           show-weeks=\"false\" datepicker-options=\"dateOptions\" date-disabled=\"\" ng-required=\"true\"/>\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                        <button class=\"btn\" ng-click=\"openDU()\"><i class=\"fa fa-calendar\"></i></button>\n" +
    "                        </span>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <span class=\"CustomValidationError displayInlineBlock\" ng-show=\"showDateError\" style=\"margin-left: 26%;\">\n" +
    "                Tweets From Date cannot be same or greater than the Tweets To Date.\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <!-- Number of Tweets -->\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">Number of Tweets</label>\n" +
    "\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <input type=\"number\" class=\"form-control\" ng-model=\"settings.count\" id=\"count\" min=\"1\" max=\"50\"\n" +
    "                       placeholder=\"Number of Tweets\">\n" +
    "            <span class=\"CustomValidationError displayInlineBlock\" ng-show=\"showCountError\">\n" +
    "                Count should be between 1 to 50.\n" +
    "            </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- Palette/Skin -->\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">Palette/Skin</label>\n" +
    "\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <input type=\"color\" ng-model=\"settings.palette\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- Buttons -->\n" +
    "        <div class=\"col-sm-11 alignCenter\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveSettings('save')\">\n" +
    "                Save\n" +
    "            </button>\n" +
    "            <button type=\"button\" class=\"btn btn-default\"\n" +
    "                    ng-click=\"saveSettings('cancel')\">Cancel\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("details/view/view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("details/view/view.tpl.html",
    "<!-- View -->\n" +
    "<div id=\"view\" class=\"row-fluid\">\n" +
    "    <!-- Settings Button -->\n" +
    "    <div class=\"btn\" ng-click=\"toggleSettings()\" id=\"settings\">\n" +
    "        <i class=\"fa fa-cog\"></i>&nbsp;Settings\n" +
    "    </div>\n" +
    "    <div gridster=\"gridsterOptions\">\n" +
    "        <ul>\n" +
    "            <li gridster-item=\"account\" ng-repeat=\"account in tweetAccounts\">\n" +
    "                <div class=\"panel panel-primary\">\n" +
    "                    <div class=\"panel-heading\">@{{account.name}}</div>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\" ng-style=\"{'background-color': backGroundColor}\" resize-height=\"120\" block-ui=\"viewBlockUI\">\n" +
    "                    <!-- If there are No Tweets to Display-->\n" +
    "                    <div ng-if=\"account.tweets.length == 0\">\n" +
    "                        No Tweets to display !!!\n" +
    "                    </div>\n" +
    "                    <!-- If there are Tweets-->\n" +
    "                    <div ng-repeat=\"t in account.tweets\" ng-if=\"account.tweets.length > 0\">\n" +
    "                        <div class=\"tweet\">\n" +
    "                            <!-- Create Date -->\n" +
    "                            <span ng-bind=\"t.createdAt | date: 'medium'\"></span>\n" +
    "                            <!-- Tweet Link -->\n" +
    "                        <span class=\"cursorPointer\">\n" +
    "                            <a ng-href=\"https://twitter.com/{{t.user.screenName}}/status/{{t.id}}\" target=\"_blank\">\n" +
    "                                <i class=\"fa fa-external-link\"></i>\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                            <!-- Name -->\n" +
    "                        <span ng-if=\"t.retweetedStatus || t.userMentionEntities.length > 0\" class=\"floatRight\">\n" +
    "                            <i class=\"fa fa-user\"></i>&nbsp;{{t.user.screenName}}\n" +
    "                        </span>\n" +
    "                            <!-- Tweet Content -->\n" +
    "                            <p>{{t.text}}</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <a class=\"navbar-brand\" ui-sref=\"#\">My App</a>\n" +
    "    </div>\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "        <!-- Part 1 -->\n" +
    "        <li ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"home\" ui-sref-opts=\"{reload: true}\">\n" +
    "                <i class=\"fa fa-twitter\"></i>\n" +
    "                Part 1\n" +
    "            </a>\n" +
    "        </li>\n" +
    "        <!-- Part 2 -->\n" +
    "        <li ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"details\" ui-sref-opts=\"{reload: true}\">\n" +
    "                <i class=\"fa fa-twitter\"></i>\n" +
    "                Part 2\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div id=\"home\" class=\"section group\">\n" +
    "    <div ng-repeat=\"account in tweetAccounts\">\n" +
    "        <div id=\"{{account.name}}\" class=\"col span_1_of_3 marginRight\">\n" +
    "            <div class=\"panel panel-primary\">\n" +
    "                <div class=\"panel-heading\">@{{account.name}}</div>\n" +
    "                <div class=\"panel-body\" resize-height=\"100\" block-ui=\"homeBlockUI\">\n" +
    "                    <!-- If there are No Tweets to Display-->\n" +
    "                    <div ng-if=\"account.tweets.length == 0\">\n" +
    "                        No Tweets to display !!!\n" +
    "                    </div>\n" +
    "                    <!-- If there are Tweets-->\n" +
    "                    <div ng-repeat=\"t in account.tweets\" ng-if=\"account.tweets.length > 0\">\n" +
    "                        <div class=\"tweet\">\n" +
    "                            <!-- Create Date -->\n" +
    "                            <span ng-bind=\"t.createdAt | date: 'medium'\"></span>\n" +
    "                            <!-- Tweet Link -->\n" +
    "                        <span class=\"cursorPointer\">\n" +
    "                            <a ng-href=\"https://twitter.com/{{t.user.screenName}}/status/{{t.id}}\" target=\"_blank\">\n" +
    "                                <i class=\"fa fa-external-link\"></i>\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                            <!-- Name -->\n" +
    "                        <span ng-if=\"t.retweetedStatus || t.userMentionEntities.length > 0\" class=\"floatRight\">\n" +
    "                            <i class=\"fa fa-user\"></i>&nbsp;{{t.user.screenName}}\n" +
    "                        </span>\n" +
    "                            <!-- Tweet Content -->\n" +
    "                            <p>{{t.text}}</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module('templates-app', ['header.tpl.html', 'home/home.tpl.html']);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <a class=\"navbar-brand\" ui-sref=\"#\">My App</a>\n" +
    "    </div>\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "        <!-- Dashboard -->\n" +
    "        <li ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"part1\" ui-sref-opts=\"{reload: true}\">\n" +
    "                <i class=\"fa fa-comment-o fa-fw\"></i>\n" +
    "                Part 1\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div id=\"home\" class=\"row-fluid\">\n" +
    "    Home !!!\n" +
    "</div>\n" +
    "");
}]);

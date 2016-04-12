// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

var adminUrl = "http://localhost:1337/";

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

	// for http request with session
	$httpProvider.defaults.withCredentials = true;

	$stateProvider

		.state('home', {
    	url: "/",
    	templateUrl: "views/template.html",
    	controller: 'HomeCtrl'
	  });

	$urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);

});

firstapp.directive('autoHeight', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            var addHeight = function() {
                $element.css("min-height", windowHeight);
            };
            addHeight();
        }
    };
});
firstapp.directive('img', function ($compile, $parse) {
	return {
		restrict: 'E',
		replace: false,
		link: function ($scope, element, attrs) {
			var $element = $(element);
			if (!attrs.noloading) {
				$element.after("<img src='img/loading.gif' class='loading' />");
				var $loading = $element.next(".loading");
				$element.load(function () {
					$loading.remove();
					$(this).addClass("doneLoading");
				});
			} else {
				$($element).addClass("doneLoading");
			}
		}
	};
});

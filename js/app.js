// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

	// for http request with session
	$httpProvider.defaults.withCredentials = true;

	$stateProvider

		.state('home', {
		url: "/home",
		templateUrl: "views/template.html",
		controller: 'HomeCtrl'
	})

	.state('blog', {
			url: "/blog/1",
			templateUrl: "views/template.html",
			controller: 'BlogCtrl'
		})
		.state('bloglist', {
			url: "/blog",
			templateUrl: "views/template.html",
			controller: 'BloglistCtrl'
		})
		.state('features', {
			url: "/features",
			templateUrl: "views/template.html",
			controller: 'FeaturesCtrl'
		})

	.state('pricing', {
		url: "/pricing",
		templateUrl: "views/template.html",
		controller: 'PricingCtrl'
	})

	.state('login', {
		url: "/login",
		templateUrl: "views/template.html",
		controller: 'LoginCtrl'
	})

	.state('register', {
		url: "/register",
		templateUrl: "views/template.html",
		controller: 'RegisterCtrl'
	})

	.state('forgot-password', {
		url: "/forgot-password",
		templateUrl: "views/template.html",
		controller: 'ForgotPasswordCtrl'
	})

	.state('rest-password', {
		url: "/rest-password",
		templateUrl: "views/template.html",
		controller: 'ResetPasswordCtrl'
	})

	$urlRouterProvider.otherwise("/home");

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
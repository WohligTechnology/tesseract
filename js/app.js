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
	})

	.state('blog', {
			url: "/blog",
			templateUrl: "views/template.html",
			controller: 'BlogCtrl'
		})
		// .state('bloglist', {
		// 	url: "/blog",
		// 	templateUrl: "views/template.html",
		// 	controller: 'BloglistCtrl'
		// })
		.state('features', {
			url: "/features",
			templateUrl: "views/template.html",
			controller: 'FeaturesCtrl'
		})
		.state('contact', {
			url: "/contact",
			templateUrl: "views/template.html",
			controller: 'ContactCtrl'
		})
		.state('tutorial', {
			url: "/tutorial",
			templateUrl: "views/template.html",
			controller: 'TutorialCtrl'
		})
		.state('documentation', {
			url: "/documentation",
			templateUrl: "views/template.html",
			controller: 'DocumentationCtrl'
		})
    .state('documentationid', {
			url: "/documentationid/:id",
			templateUrl: "views/template.html",
			controller: 'DocumentationCtrl'
		})
		.state('about', {
			url: "/about",
			templateUrl: "views/template.html",
			controller: 'AboutCtrl'
		})
		.state('faq', {
			url: "/faq",
			templateUrl: "views/template.html",
			controller: 'FaqtCtrl'
		})
		.state('terms-condition', {
			url: "/terms-condition",
			templateUrl: "views/template.html",
			controller: 'TermsConditionCtrl'
		})
		.state('privacy-policy', {
			url: "/privacy-policy",
			templateUrl: "views/template.html",
			controller: 'PrivayPolicyCtrl'
		})
		.state('blog-detail', {
			url: "/blog-detail/:id",
			templateUrl: "views/template.html",
			controller: 'BlogDetailCtrl'
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

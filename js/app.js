// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

var adminUrl = "http://localhost:1337/";

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $analyticsProvider) {

    // for http request with session
    $analyticsProvider.virtualPageviews(true);
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

    .state('my-app', {
        url: "/my-app",
        templateUrl: "views/template.html",
        controller: 'MyAppCtrl'
    })

    .state('reset-password', {
        url: "/reset-password",
        templateUrl: "views/template.html",
        controller: 'ResetPasswordCtrl'
    });

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);

});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
               target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                padding:0,
                margin:20,
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.filter('serverimage', function() {
    return function(input) {
        if (input) {
            // console.log('serverimage: ', input);
            // return input;
            return imgpath + input;
        } else {
            return "img/logo.png";
        }
    };
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
firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('uploadImage', function($http) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            callback: "=ngCallback"
        },
        link: function($scope, element, attrs) {
            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple || attrs.multiple === "") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function() {
                $scope.model = [];
            };
            $scope.upload = function(image) {
                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.name);
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data) {
                    if ($scope.callback) {
                        $scope.callback(data);
                    } else {
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                $scope.model.push({
                                    "image": data.data[0]
                                });
                            } else {
                                $scope.model.push(data.data[0]);
                            }
                        } else {
                            $scope.model = data.data[0];
                        }
                    }
                });
            };
        }
    };
});
firstapp.filter('rawHtml', ['$sce',
function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}
])
firstapp.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imageonload);
            });
        }
    };
});

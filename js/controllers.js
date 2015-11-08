angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("home");

    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('BlogCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("blog");

    $scope.menutitle = NavigationService.makeactive("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('BloglistCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("bloglist");

    $scope.menutitle = NavigationService.makeactive("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('FeaturesCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("features");

    $scope.menutitle = NavigationService.makeactive("Features");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('PricingCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("pricing");

    $scope.menutitle = NavigationService.makeactive("Pricing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('LoginCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("login");

    $scope.menutitle = NavigationService.makeactive("Sign In");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('RegisterCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("register");

    $scope.menutitle = NavigationService.makeactive("Register");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
})

;
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

    $scope.feature=[{
      icon:"ln-desktop",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Easy Backend"
    },{
      icon:"ln-iphone",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Live Preview of App"
    },{
      icon:"ln-bullhorn",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Send Notification"
    },{
      icon:"ln-at-sign",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Social Login, Email Login"
    },{
      icon:"ln-register",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Blog integration "
    },{
      icon:"ln-thumbs-up",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Social Feeds"
    },{
      icon:"ln-arrow-up3",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"iOS, Android App Publishing"
    }]
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

	.controller('ForgotPasswordCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("forgotpassword");

    $scope.menutitle = NavigationService.makeactive("Forgot Password");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
	.controller('ResetPasswordCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("resetpassword");

    $scope.menutitle = NavigationService.makeactive("Reset Password");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})


.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
})

;

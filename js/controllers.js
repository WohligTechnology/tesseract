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

// .controller('BloglistCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
//     //Used to name the .html for particular template file
//     $scope.template = TemplateService.changecontent("bloglist");
//
//     $scope.menutitle = NavigationService.makeactive("Blog");
//     TemplateService.title = $scope.menutitle;
//     $scope.navigation = NavigationService.getnav();
// })
.controller('BlogDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("blog-detail");
    $scope.menutitle = NavigationService.makeactive("Blog-Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
.controller('TutorialCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("tutorial");
    $scope.menutitle = NavigationService.makeactive("Tutorial");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
.controller('DocumentationCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("documentation");
    $scope.menutitle = NavigationService.makeactive("Documentation");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
.controller('TermsConditionCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("terms-condition");
    $scope.menutitle = NavigationService.makeactive("Terms-Condition");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
.controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
.controller('FaqtCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("faq");
    $scope.menutitle = NavigationService.makeactive("FAQ");
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
    }
  ]

    $scope.feature2=[
      {
        icon:"ln-bullhorn",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
         title:"Send Notification"
      },
    {
      icon:"ln-circle-checkmark",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Enable or Disable Any Feature "
    }]

    $scope.feature3=[
      {
        icon:"ln-at-sign",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        title:"Social Login, Email Login"
      },
    {
      icon:"ln-register",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Blog integration "
    }
  ]

    $scope.feature4=[{
      icon:"ln-thumbs-up",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Social Feeds"
    },{
      icon:"ln-contacts",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Contact Form"
    }]
    $scope.feature5=[{
      icon:"ln-picture",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Photo Gallery"
    },{
      icon:"ln-play",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Video Gallery"
    }]
    $scope.feature6=[{
      icon:"ln-headset",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Audio Gallery"
    },{
      icon:"ln-calendar3",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"Events"
    }]
    $scope.feature7=[{
      icon:"ln-iphone",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"iOS, Android App Publishing"
    },{
      icon:"ln-circle-plus",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title:"& Many More"
    }]
})

.controller('PricingCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("pricing");

    $scope.menutitle = NavigationService.makeactive("Pricing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("contact");

    $scope.menutitle = NavigationService.makeactive("Contact");
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

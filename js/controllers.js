var globalfunction = {};

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'imageupload', 'angulartics', 'angulartics.google.analytics','angular-loading-bar'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file

    $scope.template = TemplateService.changecontent("home");

    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = "Build Apps with Blaze";
    $scope.navigation = NavigationService.getnav();
    $scope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            $('.scene').parallax();
        });
    });

    $scope.socialLogin = function(val) {
        window.location.href = "https://api.blazen.io/user/" + val;
    };

})

.controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("blog");
    NavigationService.getAllBlogs(function(data) {
        $scope.blogs = data.data;

        console.log(data);
    }, function(err) {
        console.log(err);
    });

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
.controller('BlogDetailCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("blog-detail");
    NavigationService.getBlog($stateParams.id, function(data) {
        $scope.blog = data.data;
        console.log(data);
    }, function(err) {
        console.log(err);
    });
    $scope.menutitle = NavigationService.makeactive("Blog-Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('TutorialCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("tutorial");
    $scope.menutitle = NavigationService.makeactive("Tutorial");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.video = [{
        img: 'img/m7.jpg',
        title: 'Neque porro quisquam',
        descp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        img: 'img/m6.jpg',
        title: 'Neque porro quisquam',
        descp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        img: 'img/m4.png',
        title: 'Neque porro quisquam',
        descp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        img: 'img/m8.jpg',
        title: 'Neque porro quisquam',
        descp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        img: 'img/m2.png',
        title: 'Neque porro quisquam',
        descp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        img: 'img/m1.png',
        title: 'Neque porro quisquam',
        descp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }];
})

.controller('DocumentationCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("documentation");
    $scope.menutitle = NavigationService.makeactive("Docs");
    console.log("documentation");
    TemplateService.title = $scope.menutitle;
    console.log(TemplateService);
    $scope.navigation = NavigationService.getnav();

    // $scope.documentationdata = {};
    $scope.currentdoc = $stateParams.id;
    $scope.opencontent = function(id) {

        NavigationService.viewAllDocumentationSubmit($stateParams.id, function(data) {
            if (data.value !== false) {
                if (data.data.length > 0) {
                    var docs = [];
                    var grouped = _.groupBy(data.data, 'DocumentationCategory.name');
                    _.each(grouped, function(key, value) {
                        var obj = {};
                        obj.name = value;
                        obj.docs = key;
                        docs.push(obj);
                    });
                    $scope.documentationdata = docs;
                    if (!$stateParams.id) {
                        $state.go("documentationid", {
                            id: $scope.documentationdata[0].docs[0]._id
                        });
                    }
                }
            }
        });
    };


    // NavigationService.getDocumentationEditDetail($stateParams.id, function(data) {
    //     console.log('getUserEditDetail', data);
    //     $scope.editdoc = data.data;
    //
    // });

    $scope.opencontent();

    if ($stateParams.id) {
        NavigationService.editContent({
            id: $stateParams.id
        }, function(data) {
            $scope.contentdata = data;
            console.log('data of contentdata:', data);
            // if (data.value === true) {
            //
            //     $scope.allUserRecords();
            // }

        });
    }



    //
    // NavigationService.viewAllDocumentationCategorySubmit(function(data) {
    //     $scope.documentationcategorydata = data.data;
    //     console.log('user data', data.data);
    // });

})

.controller('TermsConditionCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("terms-condition");
    $scope.menutitle = NavigationService.makeactive("Terms & Condition");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('PrivayPolicyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("privacy-policy");
    $scope.menutitle = NavigationService.makeactive("Privacy Policy");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('FaqtCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("faq");
    $scope.menutitle = NavigationService.makeactive("FAQ");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('FeaturesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("features");

    $scope.menutitle = NavigationService.makeactive("Features");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.feature = [{
        icon: "ln-desktop",
        desc: "Backend provides ready to use templates which can be customized and personalized according to one's choices and needs. Entire app is managed by simple intuitive backend thus easing out majority of your work.",

        title: "Easy Backend"
    }, {
        icon: "ln-iphone",
        desc: "Confused of how your app might look?Be doubly sure with the help of live preview option which gives you the ability to watch how your app might feel. Experiment and play with your app on your mobile device in real-time with our Live Preview function.",
        title: "Live Preview of App"
    }];

    $scope.feature2 = [{
        icon: "ln-bullhorn",
        desc: "Keep your users updated by send notification function that allows you to share all the developments carried out by you at any time of the day.",
        title: "Send Notification"
    }, {
        icon: "ln-circle-checkmark",
        desc: "Don’t need a feature anymore? No worries.Easy enabling and disabling feature available.",
        title: "Enable or Disable Any Feature "
    }];

    $scope.feature3 = [{
        icon: "ln-at-sign",
        desc: "Why create new id when you can optimize the existing one’s.Users can login through social media platforms like facebook, twitter, instagram  or through email.",
        title: "Social Login, Email Login"
    }, {
        icon: "ln-register",
        desc: " Blogging is the backbone of every business marketing strategy in today’s world.Integrate all your blogs to the app and keep users informed about the latest developments.We provide a range of specific blog app builders for your various needs like tumblr app builder, Joomla app builder, WordPress app builder, Drupal app builder and many others.",
        title: "Blog integration "
    }];

    $scope.feature4 = [{
        icon: "ln-thumbs-up",
        desc: "Stay socially connected with the masses by means of social feeds option. Provides multiple social media platforms like Facebook, Instagram, Twitter at your disposal.",
        title: "Social Feeds"
    }, {
        icon: "ln-contacts",
        desc: "If your users have some queries then contact form is the thing. Keep track of what your users need and have to say by means of this feature.",
        title: "Contact Form"
    }];
    $scope.feature5 = [{
        icon: "ln-picture",
        desc: "A picture is worth a thousand words. So add volume to your user experience by means of photo gallery option. Let the photos do the talking.",
        title: "Photo Gallery"
    }, {
        icon: "ln-play",
        desc: "Give your users the pleasure of experiencing high quality videos.Strong backend helps you mold, characterize and enhance the video gallery as per your choice.",
        title: "Video Gallery"
    }];
    $scope.feature6 = [{
        icon: "ln-headset",
        desc: "This feature will let you share the audio tracks through soundcloud thus providing your users the opportunity to listen to their favourite tracks.",
        title: "Audio Gallery"
    }, {
        icon: "ln-calendar3",
        desc: "Import your past and upcoming events.Your users can RSVP to events, add to their calendar, see who else is going, and post photos of the event.",
        title: "Events"
    }];
    $scope.feature7 = [{
        icon: "ln-iphone",
        desc: "Over 80% of the smartphones in the world are android based followed by ios. Want a chance to reach out to every one of them? Then this is the feature that will help you be on top of app world by  allowing  you to publish  ios and android apps in no time.",
        title: "iOS, Android App Publishing"
    }, {
        icon: "ln-circle-plus",
        desc: "This is just the beginning to an awesome experience. There are loads of other features that will let you be ahead of your peers and be at par with latest technologies and make a lasting impression.",
        title: "And Many More"
    }];
})

.controller('PricingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("pricing");

    $scope.menutitle = NavigationService.makeactive("Pricing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("contact");
    $scope.formSubmit = false;
    $scope.form = {};
    $scope.contactSubmit = function(form, data) {
        if (form.$valid) {
            $scope.formSubmit = true;
            NavigationService.contactSubmit(data, function() {
                console.log("Form is submitted");

            });
        }
    };


    $scope.menutitle = NavigationService.makeactive("Contact");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("login");

    $scope.menutitle = NavigationService.makeactive("Sign In");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.loginData = {};

    $scope.doLogin = function() {
        NavigationService.doLogin($scope.loginData, function(data) {
            console.log(data);
            if (data.value !== false) {
                $state.go('my-app');
            } else {
                globalfunction.messageModal("Invalid login credentials");
            }
        });
    };

    NavigationService.getProfile(function(data) {
        console.log(data);
        if (data.value !== false) {
            $state.go('my-app');
        }
    });

})

.controller('RegisterCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("register");

    $scope.menutitle = NavigationService.makeactive("Register");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.register = {};

    $scope.doRegister = function() {
        if ($scope.register.password === $scope.register.confirmpassword) {
            NavigationService.doRegister($scope.register, function(data) {
                console.log(data);
                if (data.value !== false) {
                    $state.go('my-app');
                } else {
                    globalfunction.messageModal("Email id already exists");
                }
            });
        }
    };

    NavigationService.getProfile(function(data) {
        console.log(data);
        if (data.value !== false) {
            $state.go('my-app');
        }
    });

})

.controller('NewsletterCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html for particular template file
    $scope.isSubmit = false;
    $scope.submitContent = "Sending your Subscription...";
    $scope.form = {};
    $scope.newsLetterSubmit = function(form, data) {
        if (form.$valid) {
            $scope.isSubmit = true;
            NavigationService.newsletterSubmit(data, function(data2) {
                if (data2.value) {
                    $scope.submitContent = "Thank you for your subscription.";
                } else {
                    $scope.submitContent = "Your have already subscribed.";
                }
            });
        }
    };
})

.controller('ForgotPasswordCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("forgotpassword");
    $scope.menutitle = NavigationService.makeactive("Forgot Password");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.forgot = {};
    $scope.forgotPassword = function() {
        NavigationService.forgotPassword($scope.forgot, function(data) {
            if (data.value != false) {
                globalfunction.messageModal("New password e-mailed to you");
            } else if (data.value == false && data.data && data.data.comment == "User not found") {
                globalfunction.messageModal("Your email id is not registered with us");
            } else if (data.value == false && data.data && data.data.comment == "User logged in through social login") {
                globalfunction.messageModal("Your have registerd using social login");
            }
        });
    };

})

.controller('ResetPasswordCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("resetpassword");

    $scope.menutitle = NavigationService.makeactive("Reset Password");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function($scope, TemplateService, NavigationService, $uibModal, $timeout, $state) {
    $scope.template = TemplateService;

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    globalfunction.messageModal = function(text) {
        console.log("here");
        $scope.modalText = text;
        $scope.animationsEnabled = true;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/modal-message.html',
            size: 'sm',
            scope: $scope
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {

        });

        $timeout(function() {
            modalInstance.close();
        }, 5000);
    };

    $scope.doLogout = function() {
        NavigationService.doLogout(function(data) {
            console.log(data);
            if (data.value !== false) {
                $state.go('home');
            }
        });
    };

    NavigationService.getProfile(function(data) {
        console.log(data);
        if (data.value !== false) {
            $scope.userData = data;
            $scope.isLoggedin = true;
        } else {
            $scope.isLoggedin = false;
        }
    });

})

.controller('MyAppCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $state, $filter) {
    //Used to name the .html for particular template file
    $scope.template = TemplateService.changecontent("my-app");
    $scope.menutitle = NavigationService.makeactive("My Apps");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = 'views/header-app.html';
    var modalInstance = '';
    $scope.create = {};
    $scope.searchApp = {}
    $scope.searchApp.search = '';

    NavigationService.getProfile(function(data) {
        console.log(data);
        if (data.value !== false) {} else {
            $state.go('login');
        }
    });

    $scope.open = function() {
        modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/new-app.html',
            scope: $scope
        });
    };

    $scope.editOpen = function(edit) {
        $scope.edit = _.cloneDeep(edit);
        modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/app-edit.html',
            scope: $scope
        });
    };

    $scope.delete = function() {
        modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/app-delete.html',
            scope: $scope
        });
    };

    $scope.getMyApps = function(data) {
        NavigationService.getMyApps(function(data) {
            console.log(data);
            if (data.value !== false) {
                $scope.myApps = data.data;
            } else {
                $scope.myApps = [];
            }
        });
    };
    $scope.getMyApps();

    $scope.createApp = function() {
        NavigationService.createApp($scope.create, function(data) {
            if (data.value === true && data.data && data.data.comment === "No Empty App Created") {
                modalInstance.dismiss();
                globalfunction.messageModal("Sorry ! All the apps have been used");
            } else if (data.value === false && data.data === "User not logged in") {
                $state.go('home');
            } else if (data.value !== false) {
                if (modalInstance)
                    modalInstance.dismiss();
                $scope.getMyApps();
            }
            $scope.create = {};
        });
    };

    $scope.editApp = function() {
        NavigationService.editApp($scope.edit, function(data) {
            if (data.value === true && data.data && data.data.comment === "No Empty App Created") {
                modalInstance.dismiss();
                globalfunction.messageModal("Sorry ! All the apps have been used");
            } else if (data.value === false && data.data === "User not logged in") {
                $state.go('home');
            } else if (data.value !== false) {
                if (modalInstance)
                    modalInstance.dismiss();
                $scope.getMyApps();
            }
            $scope.edit = {};
        });
    };

    $scope.openApp = function(app) {
        // window.open(appurl + ":" + (app.port + 20000), '_blank');
        window.open(appurl + ":" + (app.port + 30000) + "/#/key/" + app.key, '_blank');
        // window.open("http://localhost/Night/#/key/" + app.key, '_blank');
        // window.location.href = appurl + ":" + (app.port + 30000);
    };

});

var adminurl = "https://api.blazen.io/";
var appurl = "https://app.blazen.io";
// var adminurl = "http://192.168.1.129:84/";
// var appurl = "http://192.168.1.129";
var imgpath = adminurl + "upload/readFile?file=";
var uploadurl = adminurl + "upload";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Features",
        classis: "active",
        link: "features",
        subnav: []
    },
    //
    // {
    //     name: "Pricing",
    //     classis: "active",
    //     link: "pricing",
    //     subnav: []
    // }, {
    //     name: "Blog",
    //     classis: "active",
    //     link: "blog",
    //     subnav: []
    // },


    {
        name: "Contact",
        classis: "active",
        link: "contact",
        subnav: []
    }, {
        name: "Sign In",
        classis: "active",
        link: "login",
        onLogin:1,
        subnav: []
    },{
        name: "My Account",
        classis: "active",
        link: "my-app",
        onLogin:2,
        subnav: []
    }, {
        name: "Docs",
        classis: "active",
        link: "documentation",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        getProfile: function(callback) {
            $http({
                url: adminurl + 'user/profile',
                method: 'POST'
            }).success(callback);
        },
        doLogout: function(callback) {
            $http({
                url: adminurl + 'user/logout',
                method: 'POST'
            }).success(callback);
        },
        createApp: function(obj, callback) {
            $http({
                url: adminurl + 'user/createApp',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        getMyApps: function(callback) {
            $http({
                url: adminurl + 'port/getApp',
                method: 'POST'
            }).success(callback);
        },
        viewAllDocumentationSubmit: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'documentation/viewAll',
                method: 'POST'
            }).success(callback);
        },
        // viewAllDocumentationCategorySubmit: function(callback) {
        //   // console.log('form data: ', formData);
        //   $http({
        //     url: adminurl + 'documentationcategory/viewAll',
        //     method: 'POST',
        //   }).success(callback);
        // },
        // getDocumentationEditDetail: function(id, callback) {
        //   // console.log('form data: ', formData);
        //   $http({
        //     url: adminurl + 'documentation/view',
        //     method: 'POST',
        //     withCredentials: true,
        //     data: {
        //       "_id": id
        //     }
        //   }).success(callback);
        // },
        editContent: function(id, callback) {
            $http({
                url: adminurl + 'documentation/view',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id.id,
                }
            }).success(callback);
        },
        getAllBlogs: function(successCallback, errorCallback) {
            $http.post(adminUrl + "blog/viewAll").success(successCallback).error(errorCallback);
        },
        getBlog: function(id, successCallback, errorCallback) {
            $http.post(adminUrl + "blog/view", {
                _id: id
            }).success(successCallback).error(errorCallback);
        },
        doRegister: function(register, callback) {
            $http({
                url: adminurl + 'user/register',
                method: 'POST',
                withCredentials: true,
                data: register
            }).success(callback);
        },
        doLogin: function(login, callback) {
            $http({
                url: adminurl + 'user/login',
                method: 'POST',
                withCredentials: true,
                data: login
            }).success(callback);
        },
        forgotPassword: function(forgot, callback) {
            $http({
                url: adminurl + 'user/forgotPassword',
                method: 'POST',
                withCredentials: true,
                data: forgot
            }).success(callback);
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
    };
});

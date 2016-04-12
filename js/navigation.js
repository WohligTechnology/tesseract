// var adminurl = "http://192.168.1.113:81/";
var adminurl = "http://blazen.io/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [];

    return {
        getnav: function() {
            return navigation;
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

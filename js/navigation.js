var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Features",
    classis: "active",
    link: "features",
    subnav: []
  }, {
    name: "Pricing",
    classis: "active",
    link: "pricing",
    subnav: []
  }, {
    name: "Blog",
    classis: "active",
    link: "blog",
    subnav: []
  }, {
    name: "Contact",
    classis: "active",
    link: "contact",
    subnav: []
  },{
    name: "Sign In",
    classis: "active",
    link: "login",
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
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
    getAllBlogs: function(successCallback,errorCallback) {
      $http.post(adminUrl+"blog/viewAll").success(successCallback).error(errorCallback);
    },
    getBlog: function(id,successCallback,errorCallback) {
      $http.post(adminUrl+"blog/view",{_id:id}).success(successCallback).error(errorCallback);
    },

  };
});

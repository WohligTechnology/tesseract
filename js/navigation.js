var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Features",
    classis: "active",
    link: "#/features",
    subnav: []
  }, {
    name: "Pricing",
    classis: "active",
    link: "#/pricing",
    subnav: []
  }, {
    name: "Blog",
    classis: "active",
    link: "#/blog",
    subnav: []
  }, {
    name: "Sign In",
    classis: "active",
    link: "#/login",
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

  }
});

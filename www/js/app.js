var app = angular.module('starter', ['ionic', 
                                    'starter.datamanagementService', 
                                    'starter.listController',  
                                    'starter.addFobjectController',  
                                    ]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state("list_fobjects", {
            url: "/list_fobjects",
            templateUrl: "templates/list_fobjects.html",
            controller: "ListController"
        })
        .state("add_fobject", {
            url: "/add_fobject/{fobjectId}",
            templateUrl: "templates/add_fobject.html",
            controller: "AddFobjectController"
        });
    
    $urlRouterProvider.otherwise("/list_fobjects");
});

var myApp = angular.module("myApp", ['ui.bootstrap', 'ngRoute']);

// var myApp = angular.module("myApp", ['ui.bootstrap', 'ngRoute', 'angulartics', 'angulartics.google.tagmanager']);

myApp.config(function($locationProvider, $routeProvider, $rootScope,  $location){

    // add this after d. injection above
    // for html5Mode
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');
    // for hashbang mode
    // $locationProvider.html5Mode(false).hashPrefix('!');

    // $rootScope.$on('$stateChangeSuccess', function (event, toState) {
    //     window.dataLayer.push({
    //         event: 'pageView',
    //         action: $location.path(),
    //     });
    // });

    $routeProvider

      .when('#/', {
        templateUrl: 'pages/home.html',
        controller: 'myCtrl'
      })

      .when('#/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
      })
      .when('#/support', {
        templateUrl: 'pages/support.html',
        controller: 'supportController'
      })

      // .when('#!/buyProduct:id', {
      //   templateUrl: 'pages/product.html',
      //   controller: 'productController'
      // })
});

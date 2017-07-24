var myApp = angular.module("myApp", ['ui.bootstrap', 'ngRoute']);

myApp.config(function($locationProvider, $routeProvider){

    // add this after d. injection above
    // for html5Mode
    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    // for hashbang mode
    // $locationProvider.html5Mode(false).hashPrefix('!');

    $routeProvider

      .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'myCtrl'
      })

      .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
      })
      .when('/support', {
        templateUrl: 'pages/support.html',
        controller: 'supportController'
      })

      .when('#!/buyProduct:id', {
        templateUrl: 'pages/product.html',
        controller: 'productController'
      })
});

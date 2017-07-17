var myApp = angular.module("myApp", ['ui.bootstrap', 'ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    // add this after d. injection above
    $locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider

      .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'myCtrl'
      })

      .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
      })

      .when('/buyProduct:id', {
        templateUrl: 'pages/product.html',
        controller: 'productController'
      })
}]);

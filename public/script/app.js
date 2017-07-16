var myApp = angular.module("myApp", ['ui.bootstrap', 'ngRoute']);

myApp.config(function($routeProvider){

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
});

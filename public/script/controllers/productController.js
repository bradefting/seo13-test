angular.module("myApp")
	.controller("productController", ['$scope', '$location', 'MyProducts', '$routeParams', function($scope, $location, MyProducts, $routeParams) {

      $scope.cData = {
        companies: []
      }

			$scope.init = function init() {
				// $scope.getProducts();
        console.log("buy product");
			};

			// invokes init to start everything
			$scope.init();

	}]);

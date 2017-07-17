angular.module("myApp")
	.controller("productController", ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {

      $scope.cData = {
        product: []
      }

			$scope.getProduct = function getProduct() {
				$http.get(`/pax8seo/${id}`)
						.success(function(result){
							console.log(result);
							return result;
						})
						.error(function(data, status){
							console.log(data);
						})
			};

			$scope.init = function init() {
				// $scope.getProducts();
        console.log("buy product");
			};

			// invokes init to start everything
			$scope.init();

	}]);

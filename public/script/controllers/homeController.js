angular.module("myApp")
	.controller("myCtrl", ['$scope', '$location', '$http', function($scope, $location, $http) {

			// temporary storage for data
			$scope.cData = {
				products: [],
				selectedProduct: null,
				allProducts: null
			}


			// buy product button. API call to showProduct & match ids
			$scope.showProduct = function showProduct(product) {
				$location.path('/showProduct').search({id: product.id});
				console.log($location.path('/showProduct'));
			};

			// Sets all products in cData
			$scope.getProducts = function getProducts() {
				$http.get('/pax8seo')
						.success(function(result){
							console.log(result);
							$scope.cData.products = result;
						})
						.error(function(data, status){
							console.log(data);
						})
			};


			$scope.init = function init() {
				$scope.getProducts();
			};

			// invokes init to start everything
			$scope.init();

	}]);

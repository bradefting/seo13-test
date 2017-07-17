angular.module("myApp")
	.service("MyProducts", ['$timeout', '$http', function MyProducts($timeout, $http) {

			var getAllProducts = function getAllProducts(){
					$http.get('/pax8seo')
							.success(function(result){
								console.log(result);
								return result;
							})
							.error(function(data, status){
								console.log(data);
							})
			};

	    var getProduct = function getProduct() {
					$http.get(`/pax8seo/${id}`)
							.success(function(result){
								console.log(result);
								return result;
							})
							.error(function(data, status){
								console.log(data);
							})
	    };


	    return {
				getAllProducts: getAllProducts,
				getProduct: getProduct,
	    }
}]);

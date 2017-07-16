angular.module("myApp")
	.service("MyProducts", ['$timeout', '$http', function MyProducts($timeout, $http) {
		var data = {
			products: [
				{
					id: 1,
					name: 'Product 1',
					price: 111.11,
					description: 'My cool product 1',
					imgPath: './img/img-product-1.png',
					requiresProductId: 4
				},
				{
					id: 2,
					name: 'Product 2',
					price: 222.22,
					description: 'My cool product 2',
					imgPath: './img/img-product-2.png',
					requiresProductId: 5
				}
			]
		};

			var getAllProducts = function getAllProducts(){
				$http.get('/pax8seo')
						.success(function(result){
							console.log(result);
							return result;
						})
						.error(function(data, status){
							console.log(data);
						})
			}

	    var getPartners = function getPartners() {
			return $timeout(function() {
    			return {
                then: function (callback) {
                    callback(data.partners);
                }
            };
	    	}, 2000);
	    };

	    var getCompanies = function getCompanies() {
			return $timeout(function() {
    			return {
                then: function (callback) {
                    callback(data.companies);
                }
            };
	    	}, 2000);
	    };

	    var getProducts = function getProducts() {
	    	return $timeout(function() {
    			return {
                then: function (callback) {
                    callback(data.products);
                }
            };
	    	}, 2000);
	    };

			var getProduct = function getProduct() {
	    	return $timeout(function() {
    			return {
                then: function (callback) {
                    callback(data.products);
                }
            };
	    	}, 500);
	    };


	    return {
	    	getPartners: getPartners,
	    	getCompanies: getCompanies,
	    	getProducts: getProducts,
				getProduct: getProduct,
				getAllProducts: getAllProducts
	    }
}]);

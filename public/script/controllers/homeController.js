angular.module("myApp")
	.controller("myCtrl", ['$scope', '$location', 'MyApis', 'Helper', function($scope, $location, MyApis, Helper) {

			// temporary storage for data
			$scope.cData = {
				products: [],
				partners: [],
				companies: [],
				searchInput: null,
				selectedProduct: null,
				filterProducts: [1,2,3,4,5],
				allProducts: null
			}
			// using an array for filterProducts with id's is not a long term solution bc adding/removing products would be manual. Better long-term solution not using array would be preferred.

			// variable to toggle loading message
			$scope.loadingProductsMessage = false;
			// variable to show "required products"
			$scope.requiredProduct = null;

			// buy product button. API call to buyProduct & match ids
			$scope.buyProduct = function buyProduct(product) {
				$location.path('/buyProduct').search({id: product.id});
				console.log($location.path('/buyProduct'));
			};

			// fn to display product info when clicked from sidebar
			$scope.displayProductDetails = function displayProductDetails(product) {
				$scope.requiredProduct = null;
				$scope.cData.selectedProduct = product;

				// checks if "required product" is number (null disregarded)
				if(Number.isInteger(product.requiresProductId)){
					let neededProductId = product.requiresProductId;

					// per Dave's recommendation
					// sets/shows name of the requiredProduct needed by original product
					$scope.requiredProduct = $scope.cData.allProducts[neededProductId].name;

					// OLD CODE: loop product array to find products w/ matching id and sets name to requiredProduct to be displayed
					// $scope.cData.products.forEach(function(product){
					// 	if(product.id === neededProductId){
					// 		$scope.requiredProduct = product.name;
					// 	}
					// });
				}
			};

			// fn called when "required product" name clicked. Accepts product orignally selected and invokes displayProductDetails with "required product" of the originally selected
			$scope.showRequired = function showRequired(originalProduct){

				// per Dave's recommendation
				// invokes display of required product by accessing by the key in allProducts object
				$scope.displayProductDetails($scope.cData.allProducts[originalProduct.requiresProductId]);

					// OLD CODE
					// $scope.cData.products.forEach(function(product){
					// 	if(product.id === requiredProduct.requiresProductId){
					// 		$scope.displayProductDetails(product);
					// 	}
					// });
			};

			// fn called on load, shows "loading products" until products loaded. Sets all products in cData
			$scope.getProducts = function getProducts() {
				$scope.loadingProductsMessage  = true;
				MyApis.getProducts().then(function(products) {
					$scope.loadingProductsMessage  = false;

					// products/response is array of all products
					$scope.cData.products = products;

					// per Dave's recommendation: creates object with all product info ex. object {1: object, 2: object}
					$scope.cData.allProducts = Helper.convertArrayToMap(products);

			   }, function(errorMessage) {});
			};

			// fn called on load, gets all partner info and sets in cData
			$scope.getPartners = function getPartners() {
				MyApis.getPartners().then(function(partners) {
					$scope.cData.partners = partners;
			    }, function(errorMessage) {});
			};

			// fn called on load, gets all companies info and sets in cData
			$scope.getCompanies = function getCompanies() {
				MyApis.getCompanies().then(function(companies) {
					$scope.cData.companies = companies;
			    }, function(errorMessage) {});
			};

			// Accepts all partner object and clears input search, closes product detail, and sets partner products array with product ids that partner sells
			$scope.setPartnerProducts = function setPartnerProducts(partnerInfo){

				$scope.cData.searchInput = null;
				$scope.cData.selectedProduct = null;
				$scope.cData.filterProducts = partnerInfo.products;
			};

			// fn called in ng-repeat to check partner products array with all products. Returns boolean and displays the products that result in "true"
			$scope.filterByPartner = function filterByPartner(partner){
				return $scope.cData.filterProducts.indexOf(partner.id) !== -1;
			}

			// fn clears search input, adds all products to partner product array, and closes product detail
			$scope.showAll = function showAll(){
				$scope.cData.searchInput = null;
				$scope.cData.selectedProduct = null;
				$scope.cData.filterProducts = [1,2,3,4,5];
			}

			// on page load, invokes three functions to get info
			$scope.init = function init() {
				$scope.getProducts();
				$scope.getPartners();
				$scope.getCompanies();
			};

			// invokes init to start everything
			$scope.init();

	}]);

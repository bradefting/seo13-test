angular.module("myApp")
	.controller("buyProductController", ['$scope', '$location', 'MyApis', 'Helper', '$routeParams', function($scope, $location, MyApis, Helper, $routeParams) {

      $scope.cData = {
        companies: []
      }


			// on page load, invokes three functions to get info
			$scope.init = function init() {
				// $scope.getProducts();
				// $scope.getPartners();
				// $scope.getCompanies();
        console.log("buy product");
			};

			// invokes init to start everything
			$scope.init();

	}]);

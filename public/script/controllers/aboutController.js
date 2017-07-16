angular.module("myApp")
	.controller("aboutController", ['$scope', '$location', 'MyApis', 'Helper', function($scope, $location, MyApis, Helper) {

      $scope.cData = {
        companies: []
      }

      console.log("about controller working");

      // fn called on load, gets all companies info and sets in cData
			$scope.getCompanies = function getCompanies() {
				MyApis.getCompanies().then(function(companies) {
					$scope.cData.companies = companies;
			    }, function(errorMessage) {});
			};

			// on page load, invokes three functions to get info
			$scope.init = function init() {
				// $scope.getProducts();
				// $scope.getPartners();
				$scope.getCompanies();
        console.log("showing companies");
			};

			// invokes init to start everything
			$scope.init();

	}]);

angular.module("myApp")
	.controller("aboutController", ['$scope', '$location', 'MyProducts', function($scope, $location, MyProducts) {

      $scope.cData = {
        companies: []
      }

			// on page load, invokes three functions to get info
			$scope.init = function init() {

        console.log("showing about");
			};

			// invokes init to start everything
			$scope.init();

	}]);

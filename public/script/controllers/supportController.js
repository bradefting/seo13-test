angular.module("myApp")
	.controller("supportController", ['$scope', '$location', function($scope, $location) {

      $scope.cData = {
        companies: []
      }

			// on page load, invokes three functions to get info
			$scope.init = function init() {

        console.log("showing support");
			};

			// invokes init to start everything
			$scope.init();

	}]);

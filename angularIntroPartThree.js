// hide me on the shadow box, and then anti hide-me when you click out

angular.module("lightBox", []);


angular
	.module("lightBox")
		.controller("annoyingPopUp", ["$scope", function($scope) {

			$scope.hideThis=true

			$scope.pressMe = function (){
				console.log("klikd")

				$scope.hideThis= !$scope.hideThis
			}


			$scope.clothes = function () {
				console.log("kloz'd! yay! u git a trofee!")

				$scope.hideThis= !$scope.hideThis
			}



		}])
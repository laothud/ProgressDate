progressdate.controller('CrudController', ['$scope', '$routeParams', '$location', 'angularFireCollection', 'angularFireAuth','$rootScope','angularFire', 
	function mtCtrl($scope, $routeParams, $location, angularFireCollection, angularFireAuth,$rootScope,angularFire){

	//collects the info from the database for use.
	var dateURL = new Firebase("https://progressdate.firebaseio.com/progressdate/dates");
	$scope.dates = angularFireCollection(dateURL);

	//add date
	$scope.addDate = function(){
		//checks to make sure the is something on the form
		if(angular.isDefined($scope.newDate)){
			$scope.dates.add({"userID":$scope.userHolder.id, "dateOfItem":$scope.newDate.dateOfItem, "description":$scope.newDate.descript, "noteOne":$scope.newDate.noteOne,"noteTwo":$scope.newDate.noteTwo, "noteThree":$scope.newDate.noteThree});
			$scope.addError = false;
			$location.path("/landing")
		}else{
			$scope.addError=true;
		}
	};

	//update date
	$scope.updatedate = function(){
		console.log("update clicked");
	}

	//delete date
	$scope.removedate = function(){
		console.log("delete clicked");
		// $scope.dates.remove();
	}
}]);
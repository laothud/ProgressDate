progressdate.controller('CrudController', ['$scope', '$routeParams', '$location', 'angularFireCollection', 'angularFireAuth','$rootScope','angularFire', 
	function mtCtrl($scope, $routeParams, $location, angularFireCollection, angularFireAuth,$rootScope,angularFire){

	console.log("Crud loaded");

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

	//reroute to update page and pass the info into the temp
	$scope.updateReroute = function(date){
		$location.path("/update");
		console.log(date);
		$scope.updateDate = date;
		console.log($scope.updateDate);
	}

	//update date
	$scope.update = function(){
		console.log("update clicked");
		console.log($scope.updateDate);
		$scope.dates.update($scope.updateDate, function(){
			$location.path("/landing")
		});
	}

	//delete date
	$scope.removeDate = function(){
		console.log("delete clicked");
		$scope.dates.remove();
	}
}]);
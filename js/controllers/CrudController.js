progressdate.controller('CrudController', ['$scope', '$routeParams', '$location', 'angularFireCollection', 'angularFireAuth','$rootScope','angularFire', 
	function mtCtrl($scope, $routeParams, $location, angularFireCollection, angularFireAuth,$rootScope,angularFire){

	console.log("crud controller loaded.");

	// var dateURL = new Firebase("https://progressdate.firebaseio.com/progressdate/dates");
	// //collects the info from the database for use.
	// $scope.dates = angularFireCollection(dateURL);

	//add date
	$scope.addDate = function(){
		console.log("clicked addDate");
		console.log($scope.newDate);
		console.log($scope.userHolder.id)
	};

	console.log("after addDate confirmation");

	//update date

	//delete date

	//read date
}]);
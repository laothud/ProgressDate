progressdate.controller('CrudController', ['$scope', '$routeParams', '$location', 'angularFireCollection', 'angularFireAuth','$rootScope','angularFire', 
	function($scope, $routeParams, $location, angularFireCollection, angularFireAuth,$rootScope,angularFire){

	var dateURL = new Firebase("https://progressdate.firebaseio.com/progressdate/dates");
	//collects the info from the database for use.
	$scope.dates = angularFireCollection(dateURL);

	//add date

	//update date

	//delete date

	//read date
}]);
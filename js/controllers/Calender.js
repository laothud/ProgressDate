progressdate.controller('Calender', ['$scope', '$routeParams', '$location', 'angularFireCollection', 'angularFireAuth','$rootScope','angularFire', 
	function($scope, $routeParams, $location, angularFireCollection, angularFireAuth,$rootScope,angularFire){

	console.log("Calender loaded")
	//progress bar setion
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	today = new Date().setFullYear(yyyy,mm,dd);
	var nextYear = new Date().setFullYear((yyyy+1),1,1);
	var startOfYear= new Date().setFullYear(yyyy,1,1);
	$scope.percent = "width:"+Math.round(((nextYear-startOfYear)*100)/today)+"%";
}]);
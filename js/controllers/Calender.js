progressdate.controller('Calender', ['$scope', '$routeParams', '$location', 'angularFireCollection', 'angularFireAuth','$rootScope','angularFire', 
	function($scope, $routeParams, $location, angularFireCollection, angularFireAuth,$rootScope,angularFire){

	//progress bar setion
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0 hence the +1!
	var yyyy = today.getFullYear();

	today = new Date().setFullYear(yyyy,mm,dd);
	var nextYear = new Date().setFullYear((yyyy+1),1,1);
	var startOfYear= new Date().setFullYear(yyyy,1,1);

	//the math involved in finding out what percent of time has passed in the year and set it for the progress bar.
	$scope.percent = "width:"+Math.round(((nextYear-startOfYear)*100)/today)+"%";
	$scope.todayDate = mm+"/"+dd+"/"+yyyy;
}]);
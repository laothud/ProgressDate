progressdate.controller('AdminLogin', ['$scope', '$routeParams', '$location', 'angularFireCollection', 'angularFireAuth','$rootScope','angularFire', 
	function mtCtrl($scope, $routeParams, $location, angularFireCollection, angularFireAuth,$rootScope,angularFire){

	var admin = {};

	$scope.user=true;

	//login function
    $scope.login = function() {
    	console.log("login clicked")
        angularFireAuth.login('password', {
			email: admin.email,
			password: admin.pass
        });
    };
    
    //logout function
    $scope.logout = function() {
        angularFireAuth.logout();
        $location.path('/');
    };

    //logout event
    $scope.$on("angularFireAuth:logout", function(evt, user) {
        $scope.user = false;
    });
}]);
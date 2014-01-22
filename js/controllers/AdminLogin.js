progressdate.controller('AdminLogin', ['$scope', '$routeParams', '$location', 'angularFireCollection', 'angularFireAuth','$rootScope','angularFire', 
	function mtCtrl($scope, $routeParams, $location, angularFireCollection, angularFireAuth,$rootScope,angularFire){

        var dbUrl = new Firebase('https://progressdate.firebaseio.com');
        var auth = new FirebaseSimpleLogin(dbUrl, function(error, user) {
          if (error) {
            // an error occurred while attempting login
            switch(error.code) {
              case 'INVALID_EMAIL': 
              $scope.adminEmailError = "The email you have entered is not an admin.";
              console.log("email error");
              break;

              case 'INVALID_PASSWORD': 
              $scope.adminPassError = "The password you have enter is incorrect.";
              console.log("pass error");
              break;

              default:
            }
          } else if (user) {
            // user authenticated with Firebase
            console.log("user logged in");
          }else{
            //just in case admin login doesn't work or isnt logged in if controller is running
            console.log("something is broken with the admin login")
        }
        });

    //login function
    $scope.login = function() {
    	console.log("login clicked");
        angularFireAuth.login('password', {
			   email: $scope.admin.email,
			   password: $scope.admin.pass
        });
    };
    
    //logout function
    $scope.logout = function() {
        $scope.adminUser = false;
        angularFireAuth.logout();
        $location.path('/');
    };

    //logout event
    $scope.$on("angularFireAuth:logout", function(evt, user) {
        $scope.adminUser = false;
    });

    $scope.$on("angularFireAuth:login", function(evt, adminUser) {
        if (adminUser){
            console.log("login .$on running");
            userHolder = adminUser;
            //setting a few scope variables for our adminUser navigation
            $scope.adminUser = true;
            //sets the user object into the rootscope
            $rootScope.adminUser = {};
            $location.path('/adminLanding');
        }
    });
}]);
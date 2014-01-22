progressdate.controller('Login', ['$scope', '$routeParams', '$location', 'angularFireCollection', 'angularFireAuth','$rootScope','angularFire', 
	function mtCtrl($scope, $routeParams, $location, angularFireCollection, angularFireAuth,$rootScope,angularFire){

	$scope.init=function() {
    	if ($rootScope.loginInit==true) return;
    	$rootScope.loginInit=true;

    	var userHolder;
    	 $scope.$on("angularFireAuth:login", function(evt, user) {
            if (user.provider == "facebook") {
                userHolder = user;
                
                //setting a few scope variables for our user navigation
                $scope.user = true;
                
                //sets the user object into the rootscope
                $rootScope.user = {};

                $location.path('/landing');

                var userUrl = new Firebase("https://progressdate.firebaseio.com/progressdate/users/"+userHolder.id);

                angularFire(userUrl, $rootScope, 'user').then(function()
                {
                    //if not in the database then it adds to the database
                    if (Object.keys($rootScope.user).length === 0) {
                        console.log("User does not exist" + userHolder.email + " added to the database.");

                        $rootScope.user = {"displayName": userHolder.name, "email": userHolder.email, "userType": "User", "id": userHolder.id};
                        
                        $scope.userType = true;
                        $location.path('/landing');

                    }else{
                    	console.log("User does exist")
                    }//end if
                });//end angularFire
            }
        });//end scope.on
    }

		//login function
        $scope.login = function() {
        	console.log("login clicked")
            angularFireAuth.login("facebook", {
                scope: "email"
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

         $scope.init();
}]);
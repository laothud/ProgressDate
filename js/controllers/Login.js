progressdate.controller('Login', ['$scope', '$routeParams', '$location', 'angularFireCollection', 'angularFireAuth','$rootScope','angularFire', 
	function mtCtrl($scope, $routeParams, $location, angularFireCollection, angularFireAuth,$rootScope,angularFire){

    	$scope.init=function() {
        	if ($rootScope.loginInit==true) return;
        	$rootScope.loginInit=true;

        	$scope.userHolder;

        	$scope.$on("angularFireAuth:login", function(evt, user) {
                if (user.provider == "facebook") {
                    $scope.userHolder = user;
                    
                    //setting a few scope variables for our user navigation
                    $scope.user = true;
                    
                    //sets the user object into the rootscope
                    $rootScope.user = {};

                    $location.path('/landing');

                    var userUrl = new Firebase("https://progressdate.firebaseio.com/progressdate/users/"+$scope.userHolder.id);

                    angularFire(userUrl, $rootScope, 'user').then(function()
                    {
                        //if email is not in the database then it adds to the database
                        if (Object.keys($rootScope.user).length === 0) {
                            $rootScope.user = {"displayName": $scope.userHolder.name, "email": $scope.userHolder.email, "userType": "User", "id": $scope.userHolder.id};
                            $scope.userType = true;
                            $location.path('/landing');
                        }
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
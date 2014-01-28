progressdate.controller('Login', ['$scope', '$routeParams', '$location', '$rootScope', '$firebase',
	function ($scope, $routeParams, $location, $rootScope, $firebase){

        var url = new Firebase('https://progressdate.firebaseio.com');
        var auth = new FirebaseSimpleLogin(url, function(error, user) {
            if (user) {
                console.log(user);
                $scope.userHolder = user;
                //setting a few scope variables for our user navigation
                $scope.user = true;
                $location.path('/landing');
                var userUrl = new Firebase("https://progressdate.firebaseio.com/progressdate/users/");
                //userUrl.add(user);
            }else{
                console.log(error);
            }
        });

		//login function
        $scope.login = function() {
        	console.log("login clicked")
            auth.login("facebook", {
                scope: "email"
            });
        };
        
        //logout function
        $scope.logout = function() {
            auth.logout();
            $scope.user = false;
            $location.path('/');
        };

        //logout event
        $scope.$on("angularFireAuth:logout", function(evt, user) {
            $scope.user = false;
        });
}]);
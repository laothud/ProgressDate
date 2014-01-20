var progressdate = angular.module('progressdate', ['firebase']);

progressdate.run(['angularFireAuth', '$rootScope', '$route', function(angularFireAuth, $rootScope, $route){
    var url = new Firebase("https://progressdate.firebaseio.com/");
    angularFireAuth.initialize(url, {scope: $rootScope, name: "fb_user",path: '/'});
}]);

progressdate.config(function ($routeProvider){
    $routeProvider
        .when("/" , {
            templateUrl: "partials/home.html",
            contoller: "Login"
        })
        .when("/landing",{
        	templateUrl: "partials/user_landing.html",
        	authRequired: true,
        	contoller: "Calender"
        })
        .when("/admin",{
        	templateUrl: "partials/admin.html",
        	controller: "AdminLogin"
        })
        .otherwise({
        	redirectTo:"/"
        });
})
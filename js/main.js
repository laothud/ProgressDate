var progressdate = angular.module('progressdate', ['ngRoute', 'firebase']);

progressdate.config(function ($routeProvider){
    $routeProvider
        .when("/" , {
            templateUrl: "partials/home.html",
            contoller: "Login"
        })
        .when("/landing",{
        	templateUrl: "partials/user_landing.html",
            contoller: "Calender",
            authRequired: true
        })
        .when("/admin",{
        	templateUrl: "partials/admin.html",
        	controller: "AdminLogin"
        })
        .when("/adminLanding",{
            templateUrl: "partials/admin_landing.html",
            controller: "Calender",
            authRequired: true
        })
        .when("/addDate",{
            templateUrl: "partials/addate.html",
            controller: "CrudController",
            authRequired: true
        })
        .when("/update",{
            templateUrl: "partials/updatedate.html",
            authRequired: true
        })
        .otherwise({
        	redirectTo:"/"
        });
})
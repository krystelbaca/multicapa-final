/**
 * Created by krystelbaca on 6/1/17.
 */
var app = angular.module("app", []);

    app.config(function ($routeProvider) {

        when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })

        when('/blog', {
            templateUrl: 'blog.html',
            controller: 'BlogCtrl'
        });


}

app.controller("app", home);
/// <reference path="angular.js" />
/// <reference path="angular-route.min.js" />


(function () {

    var app = angular.module("personListApp", ['ngRoute', 'personListServices']);

    app.constant("selectedClass", "selected");

    //person-summary directive
    app.directive("personSummary", function () {
        return {
            restrict: "E",
            link: function(scope,element,attrs){
                scope.peoples = function () { return scope.totalPeople(); };
            },
            templateUrl: 'person-summary.html'
            
        };
    });


    //routing
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when("/persons", {
            templateUrl: 'person-list.html',
            controller: 'PersonListCtrl'
        }).
        when("/person/:id", {
            templateUrl: 'person-detail.html',
            controller: 'PersonDetailCtrl'
        }).
        when("/personedit/:id", {
            templateUrl: "person-edit.html",
            controller: 'PersonEditCtrl'
        }).
        when('/newperson', {
            templateUrl: 'person-add.html',
            controller: 'PersonAddCtrl'
        });

    }]);

  

    
}())
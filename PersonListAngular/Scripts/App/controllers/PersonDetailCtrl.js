(function () {
    var app = angular.module('personListApp');


    //PersonDetailCtrl
    app.controller('PersonDetailCtrl', ['$scope', '$routeParams', 'personHandler', 'mainApp', function ($scope, $routeParams, personHandler, mainApp) {

        mainApp.setSectionTitle("View person");

        personHandler.get($routeParams.id, function (data) {
            $scope.person = data;
        });

    }]);

}())
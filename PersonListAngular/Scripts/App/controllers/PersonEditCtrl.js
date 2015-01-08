(function () {
    var app = angular.module('personListApp');

    //PersonEditCtrl
    app.controller('PersonEditCtrl', ['$scope', '$routeParams', 'mainApp', '$location', 'personHandler', function ($scope, $routeParams, mainApp, $location, personHandler) {

        mainApp.setSectionTitle("Edit person");

        personHandler.get($routeParams.id, function (data) {
            $scope.person = data;
        });

        $scope.savePerson = function () {

            personHandler.update($scope.person, function () {
                $location.path('/persons');
            });
        };

        $scope.deletePerson = function () {
            personHandler.remove($scope.person.id, function () {
                $location.path('/persons/');
            });

        };

    }]);

}())
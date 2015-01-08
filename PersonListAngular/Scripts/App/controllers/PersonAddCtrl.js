(function () {
    var app = angular.module('personListApp');

    //PersonAddCtrl
    app.controller('PersonAddCtrl', ['$scope', 'personHandler', '$location', 'mainApp', function ($scope, personHandler, $location, mainApp) {

        mainApp.setSectionTitle("Add Person");
        mainApp.setActiveItem("2");

        $scope.person = {};

        $scope.savePerson = function () {
            personHandler.add($scope.person, function (data) {
                $location.path('\persons');
            });

        };

    }]);

}())
(function () {
    var app = angular.module('personListApp');

    //PersonListCtrl
    app.controller('PersonListCtrl', ['$scope', 'personHandler', 'mainApp', function ($scope, personHandler, mainApp) {

        $scope.orderProp = "name";
        $scope.query = "";
        $scope.showEmployed = false;
        $scope.ePerson = null;

        mainApp.setSectionTitle("View Persons");
        mainApp.setActiveItem("1");

        personHandler.getAll(function (data) {
            $scope.persons = data;
            mainApp.updatePeopleCount();
        });

        $scope.deletePerson = function (p) {
            personHandler.remove(p.id, function () {
                var index = $scope.persons.indexOf(p);
                if (index > -1) {
                    $scope.persons.splice(index, 1);
                };
            });
        };

        $scope.editPerson = function (p) {
            $scope.ePerson = angular.copy(p);
        };

        $scope.updatePerson = function (p) {
            personHandler.update(p, function (data) {
                var index = -1;

                for (i = 0; i < $scope.persons.length; i++) {
                    if ($scope.persons[i].id == $scope.ePerson.id) {
                        index = i;
                        break;
                    };
                };

                if (index > -1) {
                    $scope.persons[index] = angular.copy($scope.ePerson);
                    //$scope.persons[index].name = $scope.ePerson.name;
                    //$scope.persons[index].employed = $scope.ePerson.employed;
                };

                $scope.ePerson = null;

            });
        };

        $scope.cancelUpdate = function (p) {
            $scope.ePerson = null;
        };

        $scope.validPerson = function (p) {
            return p != null && p.name.length > 0;
        }


    }]);

}())
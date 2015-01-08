(function () {
    var app = angular.module('personListApp');

    //MainCtrl
    app.controller('MainCtrl', ['$scope', '$rootScope', 'selectedClass', 'mainApp', 'errorHandler', function ($scope, $rootScope, selectedClass, mainApp, errorHandler) {
        
        $rootScope.sectionTitle = function () {
            return mainApp.getSectionTitle();
        };

        $rootScope.error = function () {
            return errorHandler.getLastError();
        };

        $rootScope.clearError = function () {
            errorHandler.clearLastError();
        }

        $scope.getLinkClass = function (item) {
            return !angular.isUndefined(item) && mainApp.getActiveItem().toLowerCase() == item.toLowerCase() ? selectedClass : "";
        };

        $scope.totalPeople = function () {
            return mainApp.getPeopleCount();
        };

    }]);
}())
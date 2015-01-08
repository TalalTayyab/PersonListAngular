(function () {

    var app = angular.module("personListServices");

    app.factory('mainApp', ['errorHandler', '$http', 'personHandler', function (errorHandler, $http, personHandler) {

        var activeItem = "";
        var sectionTitle = "";
        var peopleCount = 0;

        return {
            getActiveItem: function () {
                return activeItem;
            },
            setActiveItem: function (item) {

                activeItem = item;
            },
            getSectionTitle: function () {
                return sectionTitle;
            },
            setSectionTitle: function (title) {
                sectionTitle = title;
            },
            addError: function (err, status) {
                errorHandler.addError(err, status);
            },
            updatePeopleCount: function () {
                personHandler.getAll(function (data) {
                    peopleCount = data.length;
                });
                
            },
            getPeopleCount: function () {
                return peopleCount;
            }
        };
    }]);

}());
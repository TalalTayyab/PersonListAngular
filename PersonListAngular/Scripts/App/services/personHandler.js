(function () {

    var app = angular.module("personListServices");

    app.factory("personHandler", ['$http', 'errorHandler', function ($http, errorHandler) {

        var url = "api/person/";

        function serviceRequest(reqFunc, succ) {
            reqFunc().success(function (data) {
                succ(data);
            }).error(function (err, status) {
                errorHandler.addError(err, status);
            });
        }

        return {
            get: function (id, onSuccess) {
                serviceRequest(function () {
                    return $http.get(url + id);
                }, onSuccess);
            },
            remove: function (id, onSuccess) {
                serviceRequest(function () {
                    return $http.delete(url + id);
                }, onSuccess);
            },
            update: function (person, onSuccess) {
                serviceRequest(function () {
                    return $http.put(url, person);
                }, onSuccess);

            },
            add: function (person, onSuccess) {
                serviceRequest(function () {
                    return $http.post(url, person);
                }, onSuccess);
            },
            getAll: function (onSuccess) {
                serviceRequest(function () {
                    return $http.get(url);
                }, onSuccess);
            }




        };
    }]);

}());

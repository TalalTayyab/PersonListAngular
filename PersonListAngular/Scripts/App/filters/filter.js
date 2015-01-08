/// <reference path="angular.js" />
/// <reference path="angular-route.js" />


(function () {

 
    var app = angular.module("personListApp");

    app.filter("checkmark", function () {

        return function(data)
        {
           
            return data ? '\u2713' : '\u2716';
        }
    });



    //filter
    app.filter("employedPersons", function () {
        return function (items, showEmployed) {
            var result = [];
            angular.forEach(items, function (item) {
                if (item.employed == false || showEmployed == true) {
                    result.push(item);
                };
            });

            return result;
        }
    });

}())
'use strict';

angular.module('chemshareApp')
    .filter('arrayToComaList', function () {
        return function (array) {
            if(array)
                return array.join(", ");
            return "";

        }
    });

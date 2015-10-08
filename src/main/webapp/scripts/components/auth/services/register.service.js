'use strict';

angular.module('chemshareApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



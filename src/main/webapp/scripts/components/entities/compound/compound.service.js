'use strict';

angular.module('chemshareApp')
    .factory('Compound', function ($resource) {
        return $resource('api/compounds/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            }
        });
    });

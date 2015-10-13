'use strict';

angular.module('chemshareApp')
    .controller('CompoundDetailController', function ($scope, $stateParams, Compound) {
        $scope.compound = {};
        $scope.load = function (id) {
            Compound.get({id: id}, function(result) {
              $scope.compound = result;
            });
        };
        $scope.load($stateParams.id);
    });

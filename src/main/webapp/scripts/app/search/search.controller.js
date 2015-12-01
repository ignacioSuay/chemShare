'use strict';

angular.module('chemshareApp')
    .controller('SearchController', function ($scope,$http, Compound) {
        $scope.compounds = [];

        $scope.search = function() {
            $http.get("api/findCompoundsTerm/" + $scope.term).success(function (response) {
                $scope.compounds = response;
            }).error(function () {
                alert("Error getting my search compounds")
            });
        }
    });

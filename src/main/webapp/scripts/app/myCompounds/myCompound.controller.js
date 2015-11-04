'use strict';

angular.module('chemshareApp')
    .controller('MyCompoundController', function ($scope,$http,  Compound) {
        $scope.compounds = [];
        $scope.loadAll = function() {
            var userId = "user-3";
            $http.post("api/findCompounds", userId).success(function (response) {
                $scope.compounds = response;
            }).error(function(){alert("Error getting my compounds data")});
        };
        $scope.loadAll();

        $scope.create = function () {
            Compound.save($scope.compound,
                function () {
                    $scope.loadAll();
                    $('#saveCompoundModal').modal('hide');
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            Compound.get({id: id}, function(result) {
                $scope.compound = result;
                $('#saveCompoundModal').modal('show');
            });
        };

        $scope.delete = function (id) {
            Compound.get({id: id}, function(result) {
                $scope.compound = result;
                $('#deleteCompoundConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Compound.delete({id: id},
                function () {
                    $scope.loadAll();
                    $('#deleteCompoundConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.clear = function () {
            $scope.compound = {structure: null, university: null, price: null, unit: null, userId: null, id: null};
        };
    });

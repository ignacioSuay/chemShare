'use strict';

angular.module('chemshareApp')
    .controller('CompoundController', function ($scope, Compound) {
        $scope.compounds = [];
        $scope.loadAll = function() {
            Compound.query(function(result) {
               $scope.compounds = result;
            });
        };
        $scope.loadAll();

        $scope.create = function () {
            $scope.compound.tags = $scope.getTags();
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
            $scope.compound = {structure: null, university: null, price: null, unit: null, userId: null, id: null, tags: null};
            $scope.tags = null;
        };

        $scope.getTags = function(){
            if($scope.tags)
                return $scope.tags.split(",").map(function(s) { return s.trim()});
            return null;
        }
    });

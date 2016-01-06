'use strict';

angular.module('chemshareApp')
    .controller('SearchController', function ($scope,$http, Compound, $stateParams) {
        $scope.compounds = [];

        $scope.init = function(){
            if($stateParams.searchTerm){
                $scope.term = $stateParams.searchTerm;
                $scope.search();
            }
        };


        $scope.search = function() {
            $http.get("api/findCompoundsTerm/" + $scope.term).success(function (response) {
                $scope.compounds = response;
            }).error(function () {
                alert("Error getting my search compounds")
            });
        };

        $scope.tagSearch = function(tag) {
            $scope.term = tag;
            $scope.search();
        };

        $scope.init();

    });

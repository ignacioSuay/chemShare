'use strict';

angular.module('chemshareApp')
    .controller('MainController', function ($scope,$state, Principal) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $('#mainView').removeClass("container");

        $scope.$on("$destroy", function() {
            $('#mainView').addClass("container");
        });

        $scope.search = function(){
            $state.go("search", {'searchTerm':$scope.searchTerm});
        }

    });

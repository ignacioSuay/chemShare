'use strict';

angular.module('chemshareApp')
    .controller('MainController', function ($scope, Principal) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $('#mainView').removeClass("container");

        $scope.$on("$destroy", function() {
            $('#mainView').addClass("container");
        });

    });

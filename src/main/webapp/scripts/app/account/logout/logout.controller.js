'use strict';

angular.module('chemshareApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });

'use strict';

angular.module('chemshareApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('myCompound', {
                parent: 'entity',
                url: '/myCompound',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'chemshareApp.compound.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/myCompounds/myCompounds.html',
                        controller: 'MyCompoundController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('compound');
                        return $translate.refresh();
                    }]
                }
            })
    });

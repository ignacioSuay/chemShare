'use strict';

angular.module('chemshareApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('compound', {
                parent: 'entity',
                url: '/compound',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'chemshareApp.compound.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/compound/compounds.html',
                        controller: 'CompoundController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('compound');
                        return $translate.refresh();
                    }]
                }
            })
            .state('compoundDetail', {
                parent: 'entity',
                url: '/compound/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'chemshareApp.compound.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/compound/compound-detail.html',
                        controller: 'CompoundDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('compound');
                        return $translate.refresh();
                    }]
                }
            });
    });

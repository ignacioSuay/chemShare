'use strict';

angular.module('chemshareApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('search', {
                parent: 'entity',
                url: '/search',
                params: {'searchTerm':null},
                data: {
                    roles: [],
                    pageTitle: 'chemshareApp.compound.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/search/search.html',
                        controller: 'SearchController'
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

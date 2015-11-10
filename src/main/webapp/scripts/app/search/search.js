'use strict';

angular.module('chemshareApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('search', {
                parent: 'entity',
                url: '/search',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'chemshareApp.compound.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/search/search.html',
                        controller: 'SearchController'
                    }
                }
                //resolve: {
                //    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                //        $translatePartialLoader.addPart('search');
                //        return $translate.refresh();
                //    }]
                //}
            })
    });

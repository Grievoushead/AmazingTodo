
var TodoApp = angular.module("TodoApp", ["ngResource"]).
    config(function($routeProvider) {
        $routeProvider
            .when('/', { controller: "ListCtrl", templateUrl: 'partial/list' })
            .when('/new', { controller: "CreateCtrl", templateUrl: 'partial/detail' })
            .when('/edit/:itemId', { controller: "EditCtrl", templateUrl: 'partial/detail' })
            .when('/404', { templateUrl: 'partial/404' })
            .otherwise({ redirectTo: '/404' });
    });

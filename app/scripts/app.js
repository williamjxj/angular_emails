'use strict';

var EmailApp = angular.module('angularFullstackApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main',
                controller: 'MainCtrl'
            })
            .when('/new', {
                templateUrl: 'partials/details',
                controller: 'CreateCtrl'
            })
            .when('/edit/:editId', {
                templateUrl: 'partials/details',
                controller: 'EditCtrl'
            })
            .when('/about', {
              templateUrl: 'partials/about',
              controller: 'AboutCtrl'
            })
            .when('/contact', {
              templateUrl: 'partials/contact',
              controller: 'ContactCtrl'
            })
            .when('/message', {
              templateUrl: 'partials/message',
              controller: 'MessageCtrl'
            })
            .when('/emails', {
              templateUrl: 'partials/emails',
              controller: 'EmailsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });

EmailApp.factory('Email', ['$resource', function($resource) {
    return $resource('/api/Email/:id', { id: '@id' }, { update: { method: 'PUT' } });
}]);

EmailApp.directive('greet', function () {
    return {
        template: '<h3 class="alert-warning">Greetings from {{from}} to {{to}}</h3>',
        controller: function ($scope, $element, $attrs) {
            $scope.from = $attrs.from;
            $scope.to = $attrs.greet;
        }
    };
});

EmailApp.filter('checkmark', function() {
    return function(input) {
        // return input ? '\u2713' : '\u2718';
        return input ? input : '\u2718';
    }
});

var CreateCtrl = function($scope, $location, Email) {
    $scope.action = '添加新成员';
    $scope.save = function(){
        Email.save($scope.member, function() {
            $location.path('/');
        });
    }
};

var EditCtrl = function($scope, $location, $routeParams, Email) {
    $scope.action = '更新成员';
    var id = $routeParams.editId;
    $scope.member = Email.get({id: id});
    console.log($scope.member);

    $scope.save = function() {
        Email.update({id: id}, $scope.member, function() {
            $location.path('/list');
        });
    }
};
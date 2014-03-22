'use strict';

angular.module('angularFullstackApp')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.menu = [{
                'title': '主页',
                'link': '/'
            },
            {
                'title': '关于我们',
                'link': '/about'
            },
            {
                'title': '联络我们',
                'link': '/contact'
            },
            {
                'title': 'Message',
                'link': '/message'
            },
            {
                'title': '邮件管理',
                'link': '/emails'
            }];

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });

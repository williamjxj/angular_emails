'use strict';

angular.module('angularFullstackApp')
  .controller('AboutCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.$emit('someEvent', [1,2,3, 'william for testing the emit and on of the angularjs.']);
        $rootScope.$broadcast('someEvent',[10000,2000,3, 'william for testing the emit and on of the angularjs.']);
  });

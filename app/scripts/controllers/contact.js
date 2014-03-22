'use strict';

angular.module('angularFullstackApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$on('someEvent', function(mass) {console.log(mass)});
  });

'use strict';

angular.module('angularFullstackApp')
  .controller('EmailsCtrl', function ($scope, $http) {
    $http.get('/api/emails').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });

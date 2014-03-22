'use strict';

describe('Controller: WilliamCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFullstackApp'));

  var WilliamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WilliamCtrl = $controller('WilliamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

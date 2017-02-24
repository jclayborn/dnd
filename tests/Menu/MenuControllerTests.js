var sandbox,
    MenuController,
    $controller,
    $scope,
    assert = require('assert');

describe('MenuController', function () {
    'use strict';
    beforeEach(module('app.menu'));

    beforeEach(inject(function (_$controller_, $rootScope) {
        sandbox = sinon.sandbox.create();
        $controller = _$controller_;
        $scope = $rootScope.$new();
    }));

    afterEach(function () {
        sandbox.restore();
    });

    it('should change the value of tab when the user selects a new page', function () {
        MenuController = $controller('MenuController', {});
        MenuController.setTab('/');
        $scope.$apply();
        assert.isTrue(MenuController.tab === '/');
    });
});

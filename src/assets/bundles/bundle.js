angular.module('app.menu', []);

function MenuController() {
    'use strict';
    var self = this;
    self.tab = '';
    self.setTab = function (tab) {
        console.log('changing tab : ', tab);
        self.tab = tab;
    }
}

angular.module('app.menu')
       .controller('MenuController', MenuController);

function Menu() {
    'use strict';
    return {
        restrict: 'E',
        templateUrl: 'src/Menu/Menu.html',
        controller: 'MenuController',
        controllerAs: 'menu'
    };
}

angular.module('app.menu')
       .directive('dndMenu', Menu);

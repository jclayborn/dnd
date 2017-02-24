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

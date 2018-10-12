function MenuController() {
    let self = this;
    self.tab = '';
    self.setTab = function (tab) {
        self.tab = tab;
    }
}

angular.module('app.menu')
       .controller('MenuController', MenuController);

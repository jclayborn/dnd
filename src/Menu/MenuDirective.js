function Menu() {
    return {
        restrict: 'E',
        templateUrl: 'src/Menu/Menu.html',
        controller: 'MenuController',
        controllerAs: 'menu'
    };
}

angular.module('app.menu')
       .directive('dndMenu', Menu);

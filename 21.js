var m1 = angular.module('app', []);
m1.directive('hello', function () {
    return {
        restrict:'EA',
        template : '<p>这是一个组件</p>'
    }
});
m1.controller('aaa', ['$scope', function ($scope) {

}]);
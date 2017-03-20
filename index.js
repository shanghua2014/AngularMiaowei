var m1 = angular.module('app', []);
m1.directive('myTab', function () {
    return {
        restrict:'E',
        templateUrl : './tmp.html' 
    }
});
m1.controller('aaa', ['$scope', function ($scope) {
}]);
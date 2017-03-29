var m1 = angular.module('app', []);
m1.directive('myTab', function () {
    return {
        restrict:'E',
        // scope:true,//独立作用域
        // scope : {}, //隔离作用域，不受外部变量影响，配合内部contrller
        scope : {   //作用域执行策略
            myId : '@shangHua',  // @绑定的是字符串
            myName : '=',    // =绑定的是数据，共享controller中的name数据，其实就是一个变量
            myFn : '&' // &绑定函数
        },
        controller : ['$scope', function ($scope){
            $scope.name = 'miaov2'
        }],
        templateUrl : './tmp.html' 
    }
});
m1.controller('aaa', ['$scope', function ($scope) {
    $scope.name = 'hello';
    $scope.show = function (n) {
        alert(n); 
    }
}]);
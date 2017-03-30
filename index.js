var m1 = angular.module('app', []);
m1.directive('myTab', function () {
    return {
        restrict:'E',
        // scope:true,  //独立作用域
        // scope : {}, //隔离作用域，不受外部变量影响，配合内部contrller
        scope : {   //作用域执行策略
            myId : '@',  // @绑定的是字符串
            myData : '='
        },
        controller : ['$scope', function ($scope){
            $scope.name = 'miaov2'
        }],
        link : function (scope, element, attr) {
            // console.log(scope.name);
            // console.log(attr.myId);
            element.delegate('input', 'click', function () {
                $(this).addClass('active').siblings('input').removeClass('active');
                $(this).siblings('div').eq($(this).index()).show().siblings('div').hide();
            });
        },
        templateUrl : './tmp.html' 
    }
});
m1.controller('aaa', ['$scope', function ($scope) {
    $scope.name = 'hello';
    $scope.data1 = [
        {title:'数学', content:'1+1=2'},
        {title:'语文', content:'知之为知之，不知为不知'},
        {title:'英语', content:'hello word'}
    ];
    $scope.data2 = [
        {title:'物理', content:'万有引力定律'},
        {title:'化学', content:'H2O'}
    ]
}]);
/**
 * Created by MAKS- on 2015/11/2.
 */
var myApp=angular.module('myApp.view4',['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
   $routeProvider.when('/view4',{
           templateUrl:'view4/view4.html',
           controller:'MainCtrl'
       }
   )
}]);
myApp.controller('MainCtrl',['$scope',function($scope){
        $scope.infoList = [
            {
                title: '预期年化收益率',
                p2p: '7% - 14%',
                bank: '约 4% - 5.5%',
                yeb: '约 3% - 4%'
            },
            {
                title: '买入当天生息',
                p2p: 'aa',
                bank: 'bb',
                yeb: 'cc'
            },
            {
                title: '买入次日开始付息',
                p2p: true,
                bank: false,
                yeb: false
            },
            {
                title: '每日付息',
                p2p: true,
                bank: false,
                yeb: true
            },
            {
                title: '每日利息自动复投',
                p2p: true,
                bank: false,
                yeb: '同货币基金'
            },
            {
                title: '期限灵活，随时可取',
                p2p: true,
                bank: false,
                yeb: true
            },
            {
                title: '可以零钱增投',
                p2p: true,
                bank: false,
                yeb: true
            }
           ];
    }]);
'use strict';

angular.module('myApp.view2', ['ngRoute','ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])
.animation('.fade-in',function(){
  return{
    enter:function(element,done){
      //运行动画
      //当动画结束的时候调用done
      return function(cancelled){
        //关闭或者取消的回调
      }
    }
  }
 })
.controller('View2Ctrl', [function() {

}]);
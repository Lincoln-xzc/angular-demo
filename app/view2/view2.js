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
      //���ж���
      //������������ʱ�����done
      return function(cancelled){
        //�رջ���ȡ���Ļص�
      }
    }
  }
 })
.controller('View2Ctrl', [function() {

}]);
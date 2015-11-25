'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
  $scope.sendLogin=function(){
      $scope.sendRegister=function(){}
  }
})
.directive('loginForm',function(){
      return {
        scope:{
          onLogin:'&',
          onRegister:'&'
        },
        templateUrl:'../view1/view1.html',
        link:function(scope,ele,attrs){
          scope.showLoginForm=function(){
            scope.onLogin({user:scope.loginUser});
          };
          scope.submitRegister=function(){
            scope.onRegister({user:scope.newUser});
          }
        }
      }
    });

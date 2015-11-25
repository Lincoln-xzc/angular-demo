/**
 * Created by MAKS- on 2015/10/29.
 */
var app=angular.module('myApp.view3',['ngTouch','ui.grid','ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/view3',{
         templateUrl:'view3/view3.html',
         controller:'MainCtrl'
        }
    )
}]);
app.controller('MainCtrl',function($scope){
    $scope.myData=[
        {
            "firstName": "Cox",
            "lastName": "Carney",
            "company": "Enormo",
            "employed": true
        },
        {
            "firstName": "Lorraine",
            "lastName": "Wise",
            "company": "Comveyer",
            "employed": false
        },
        {
            "firstName": "Nancy",
            "lastName": "Waters",
            "company": "Fuelton",
            "employed": false
        }
    ];
});
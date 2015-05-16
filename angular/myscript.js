/**
 * Created by Parkash on 5/10/2015.
 */
 var app = angular.module("myapp",[]);// first arguement name of your application second arguemnt is module dependcy
 app.controller("mycontroller",function($scope)
{
    $scope.name="Hello world";

    setInterval(function(){
        alert($scope.name);
    }, 5000);

});

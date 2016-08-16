/**
 * Created by Administrator on 2016/8/14 0014.
 */

var app = angular.module('starter.controllers');


app.controller('AccountCtrl', function($scope) {
  console.log("AccountCtrl" );
  $scope.settings = {
    enableFriends: true
  };
});



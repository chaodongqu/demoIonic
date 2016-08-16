
var app = angular.module('starter.controllers');



app.controller('messageCtrl', function($scope) {
  console.log("messageCtrl" );

});
app.controller('messageBoardCtr', function($scope , $http ,BoardService) {
  console.log("公告" );
  // http://localhost:8080/mobilepm/board/findboard.do

  BoardService.load( onData);

  function onData( rcvData ){
    $scope.data =rcvData;
  console.log("rcv data...");
  }

});


app.controller('messageBoardDetail', function($scope, $stateParams ,BoardService) {
  console.log("公告详情" );
  $scope.id = $stateParams.id;

  console.log(  $stateParams.id );

  $scope.data = BoardService.find( $scope.id);


});

app.controller('messageTaskCtrl', function($scope) {
  console.log("messageTaskCtrl" );
});

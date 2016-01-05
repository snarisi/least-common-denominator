app.controller('MainCtrl', function($scope, $http, Socket) {
  $scope.generateGroup = function(){
    navigator.geolocation.getCurrentPosition(function(result){
      $http.post('api/groups', {
        name: $scope.groupName,
        location: {
          latitude: result.latitude,
          longitude: result.longitude
        }})
      .then(function(result){

      })
    })
  }
});

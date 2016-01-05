app.controller('MainCtrl', function($scope, $http, Socket) {
  $scope.generateGroup = function(){
    console.log($scope.newGroup.name);
    $scope.status = "getting your location...";
    navigator.geolocation.getCurrentPosition(function(result){
    $scope.status = "location retrieved!";
      $http.post('api/groups', {
        name: $scope.newGroup.name,
        location: {
          latitude: result.coords.latitude,
          longitude: result.coords.longitude
        }})
      .then(function(result){
        $state.go('admin', { id: result.data._id });
      })
      .then(null, function(error){
        alert(error);
      })
    })
  }
  Socket.on('groups', function (groups) {
      console.log('groups: ', groups);
  })
});

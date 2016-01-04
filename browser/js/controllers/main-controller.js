<<<<<<< HEAD
app.controller('MainCtrl', function($scope, $http) {
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
=======
app.controller('MainCtrl', function($scope, Group) {
});
>>>>>>> d9383f03dfddeec117519952ebec2223253efabc

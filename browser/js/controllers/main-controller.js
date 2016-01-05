app.controller('MainCtrl', function($scope, $http, Categories) {
  $scope.categories = Categories.list
  $scope.obnoxious = function(){
    alert($scope.categories);
  }
  $scope.formData = {};
  $scope.translateData = function() {
    var exclusions= Object.keys($scope.formData.exclusions);
    return exclusions;
  }
  $scope.submitExclusions = function() {
    var exclusions = $scope.translateData();
    alert(exclusions);
    // $http.put('api/groups/')
  }
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

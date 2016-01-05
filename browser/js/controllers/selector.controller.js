app.controller('SelectorCtrl', function($scope, $http, Categories, $state, $stateParams) {
  $scope.categories = Categories.list
  $scope.formData = {};
  $scope.translateData = function() {
    var exclusions= Object.keys($scope.formData.exclusions);
    return exclusions;
  }
  $scope.submitExclusions = function() {
    var exclusions = $scope.translateData();
    $http.put('api/groups/' + $stateParams.id, { exclude: exclusions })
        .then(function () {
            $state.go('thankYou', { id: $stateParams.id });
        });
  }
});

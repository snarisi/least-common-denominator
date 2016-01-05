app.controller('ResultCtrl', function ($scope, $stateParams, Group, currentGroup) {
    $scope.loaded = false;
    $scope.group = currentGroup;
    console.log($scope.group);
    Group.search($stateParams.id)
        .then(function (results) {
            $scope.results = results
            $scope.topResult = results[0];
            $scope.loaded = true;
        });
});

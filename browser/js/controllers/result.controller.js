app.controller('ResultCtrl', function ($scope, $stateParams, Group) {
    $scope.loaded = false;
    Group.search($stateParams.id)
        .then(function (results) {
            $scope.results = results
            $scope.topResult = results[0];
            $scope.loaded = true;
        });
});

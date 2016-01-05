app.controller('AdminCtrl', function ($scope, currentGroup, Group) {
    $scope.group = currentGroup;
    console.log($scope.group);

    $scope.search = Group.search;
});

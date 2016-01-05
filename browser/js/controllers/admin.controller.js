app.controller('AdminCtrl', function ($scope, Group, $stateParams, $window) {
    Group.getGroup($stateParams.id)
    .then(function(result){
    	$scope.group = result;
    	console.log(window.location.host);
    	$scope.selectorUrl = "http://" + $window.location.host + "/#/group/" + result._id + "/selector";
    })
    $scope.search = Group.search;
    $scope.closeVoting = Group.closeVoting;
});

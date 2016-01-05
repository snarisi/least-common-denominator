app.controller('AdminCtrl', function ($scope, Group, $stateParams, $window, $http) {
	$scope.shortenUrl = function(longUrl) {
		$http.post("https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyASp1fDSqKGLmup1oTPPBU6TZpH8FpisY8", {
			longUrl: longUrl
		})
		.then(function(result){
			$scope.shortUrl = result.data.id;
		})
	}
    Group.getGroup($stateParams.id)
    .then(function(result){
    	$scope.group = result;
    	$scope.selectorUrl = "http://" + $window.location.host + "/#/group/" + result._id + "/selector";
    	$scope.shortenUrl($scope.selectorUrl);
    })
    $scope.search = Group.search;
    $scope.closeVoting = Group.closeVoting;
});

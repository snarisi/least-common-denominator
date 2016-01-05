app.config(function ($stateProvider) {
	$stateProvider.state('selector', {
		url: '/selector',
		templateUrl: 'js/templates/selector.html',
		controller: 'MainCtrl'
		});
});
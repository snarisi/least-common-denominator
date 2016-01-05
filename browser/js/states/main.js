app.config(function ($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '../js/templates/main.html',
		controller: 'MainCtrl'
	});
});

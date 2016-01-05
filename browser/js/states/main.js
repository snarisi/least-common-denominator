app.config(function ($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '../templates/main.html',
		controller: 'MainCtrl'
	});
});

app.config(function ($stateProvider) {
	$stateProvider.state('selector', {
		url: '/group/:id/selector',
		templateUrl: 'js/templates/selector.html',
		controller: 'SelectorCtrl'
		});
});
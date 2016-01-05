var app = angular.module('lcd', ['ui.router']);

app.config(function ($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});

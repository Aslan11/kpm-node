/*	Define Angular App
---------------------------------------------------------------------- */
var app = angular.module('app', ['ngRoute', 'ngResource', 'ngAnimate', 'ngCookies', 'ngSanitize', 'ngTouch']);
app.config(function($httpProvider, $routeProvider, $locationProvider){
	$routeProvider.
		when('/', {
			action: 'home'
		}).
		
		when('/about', {
			action: 'about'
		}).
		
		when('/development', {
			action: 'development'
		}).
		
		when('/portfolio', {
			action: 'portfolio'
		}).
		
		when('/lab', {
			action: 'lab'
		}).
		
		when('/blog', {
			action: 'blog'
		}).
		
		when('/contact', {
			action: 'contact'
		}).
		
		otherwise({ redirectTo: '/' });

	// Remove "#" from the URL (Except for IE < 10)
	if(window.history && window.history.pushState){
		$locationProvider.html5Mode(true);
	}
});
/*	Main Controller
---------------------------------------------------------------------- */
app.controller('mainController', function($scope, $rootScope, $location, $route, $routeParams, $timeout, $resource){
	//Get Current View From Router
	$scope.$on('$routeChangeSuccess', function(){
		$scope.currentView = $route.current.action;
	});

	goHome = function(){
		console.log('hello');
	};
});
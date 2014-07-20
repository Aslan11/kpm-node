/*	Define Angular App
---------------------------------------------------------------------- */
var app = angular.module('app', ['ngRoute', 'ngResource', 'ngAnimate', 'ngCookies', 'ngSanitize', 'ngTouch', 'ng']);

/* Kill Animation on Load
---------------------------------------------------------------------- */
setTimeout(function(){
	console.log('boobies');
	var body = document.getElementsByTagName('body')[0];
	body.className = '';
}, 400)

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
		
		when('/design', {
			action: 'design'
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

	//Menu Hover?
	$scope.menuHover = false;

	goHome = function(){
		console.log('hello');
	};
});
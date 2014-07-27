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
		
		when('/design', {
			action: 'design'
		}).

		when('/apps', {
			action: 'apps'
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
//Responsive Angular directive
app.directive('resize', function($window) {
  return function($scope) {
    $scope.initializeWindowSize = function() {
      $scope.windowHeight = $window.innerHeight;
      $scope.windowWidth = $window.innerWidth;
      return $scope.windowWidth;
    };
    $scope.initializeWindowSize();
    return angular.element($window).bind('load resize', function() {
      var size = $scope.initializeWindowSize();
      if(size <= 760){
	      $scope.browserType = 'mobile';
      }else{
	      $scope.browserType = 'desktop';
      }
      
      return $scope.$apply();
    });
  };
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
});
/*	Mobile Controller
---------------------------------------------------------------------- */
app.controller('mobileController', function($scope, $rootScope, $location, $route, $routeParams, $timeout, $resource){
	
	//Get Current View From Router
	$scope.$on('$routeChangeSuccess', function(){
		$scope.currentView = $route.current.action;
	});

	$scope.aboutActive = false;
	$scope.devActive = false;
	$scope.designActive = false;
	$scope.appsActive = false;


	$scope.aboutToggle = function(){
		if($scope.aboutActive === false){
			$scope.aboutActive = true;
		}else{
			$scope.aboutActive = false;
		}
	};

	$scope.devToggle = function(){
		if($scope.devActive === false){
			$scope.devActive = true;
		}else{
			$scope.devActive = false;
		}
	};

	$scope.designToggle = function(){
		if($scope.designActive === false){
			$scope.designActive = true;
		}else{
			$scope.designActive = false;
		}
	};

	$scope.appsToggle = function(){
		if($scope.appsActive === false){
			$scope.appsActive = true;
		}else{
			$scope.appsActive = false;
		}
	};

});
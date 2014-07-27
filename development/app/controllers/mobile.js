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
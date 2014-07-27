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

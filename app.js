angular.module("myApp", [])

  .controller("myController", function($scope,$http) {
    $scope.getGitInfo = function () {
         $scope.userNotFound = false;
         $scope.loaded = false;

         $http.get(" https://api.github.com/search/users?q=tom" + $scope.username)
               .success(function (data) {
                  if (data.name == "") {
						data.name = data.login;
					  }
				  debugger;
                  $scope.users = data;
                  $scope.loaded = true;
               })
               .error(function () {
                  $scope.userNotFound = true;
               });
         $http.get("https://api.github.com/users/" + $scope.username + "/repos").success(function (data) {
            $scope.repos = data;
            $scope.reposFound = data.length > 0;
         });
      }
  });
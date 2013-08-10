
angular.module("TodoApp").controller("CreateCtrl", ["$scope", "$location", "Todo", function ($scope, $location, Todo) {
    
    $scope.btnName = "Add";

    $scope.save = function () {
        Todo.save($scope.item, function () {
            $location.path('/');
        });
    };
    
}]);

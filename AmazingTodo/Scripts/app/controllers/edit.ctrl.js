
angular.module("TodoApp").controller("EditCtrl", ["$scope", "$routeParams", "$location", "Todo", function ($scope, $routeParams, $location, Todo) {
    
    $scope.item = Todo.get({ id: $routeParams.itemId });
    $scope.btnName = "Edit";
    
    $scope.save = function () {
        Todo.update({id: $scope.item.TodoItemId}, $scope.item, function () {
            $location.path('/');
        });
    };
    
}]);

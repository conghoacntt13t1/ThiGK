app.directive('myTodo',function () {
    return{
        restrict:'EA',
        templateUrl: 'app/templates/todo.tpl.html',
        scope:{
            list:'=',
            title:'@'
        },
        controller: function ($scope) {
            $scope.addTodo=function () {
                var newTodo={};
                newTodo.name=$scope.name;
                newTodo.completed=false;
                $scope.list.push(newTodo);
                console.log($scope.list);
            }
        }
    };
});
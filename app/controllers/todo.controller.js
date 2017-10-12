app.controller('todoController',function ($scope) {
    $scope.todo=[
        {name: 'Create a custom directive', completed:true},
        {name: 'Learn about restrict',completed:true},
        {name: 'Master scope',completed:false}
    ];
});
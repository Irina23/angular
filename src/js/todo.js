/**
 * Created by ira on 16.11.5.
 */
var todoApp = angular.module('todoApp', []);
todoApp.controller('TodoCtrl', function ($scope) {

    $scope.todos = [
        {name: 'Nexus S', done: false , parenttodos: [
            {name: 'list1', done: false },
            {name: 'list2', done: false},
            {name: 'list3', done: false}

        ]},
        {name: 'Motorola XOOM', done: false},
        {name: 'Loren Ipsum', done: false},
        {name: 'Generation tablet', done: false},
        {name: 'The Next', done: false, parenttodos: [
                {name: 'list3', done: false},
                {name: 'list4', done: false}
            ]}
    ];

    $scope.countChildTasks = function (obg) {
        var checked = 0;
        if (!obg.parenttodos) return {'checked': 0, 'all': 0};
        obg.parenttodos.forEach(function (child) {
            if (child.done) checked++;
        });
        return {'checked': checked, 'all': obg.parenttodos.length};
    };

    $scope.countAll = function () {
        $scope.size = 0;
        $scope.size_active = 0;
        $scope.todos.forEach(function (obg) {
            $scope.size++;
            $scope.size += $scope.countChildTasks(obg).all;
            if (obg.done) $scope.size_active++;
            $scope.size_active += $scope.countChildTasks(obg).checked;


        });
    };
    $scope.countAll();

    $scope.todoAdd = function() {
        $scope.todos.push({name:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };
    $scope.todoparentAdd = function() {
        
        $scope.todoInputParent = "";
        if (this.todo.parenttodos instanceof Array) {
            this.todo.parenttodos.push({
                'name': this.todoInputParent
            });
        } else {
            this.todo.parenttodos = [{
                'name': this.todoInputParent, done: false
            }]
        }
    };

});

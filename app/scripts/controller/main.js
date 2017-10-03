'use strict';
angular.module("myApp")
.controller("mainCtrl", function($scope, dataService){
  $scope.helloWorld =function(){
    alert("Hello Brother!!!");
  };
  dataService.getData(
    function(response){
      console.log('Data returned for todos : '+response.data);
      $scope.todos = response.data;
    }
  );
  $scope.deleteTodo = function(todo, index){
    dataService.deleteTodo(todo);
    $scope.todos.splice(index , 1);
  };
  $scope.saveTodos = function(todo){
    dataService.saveTodo(todo);
  };
  $scope.addTodo =function(){
    var todo = {"name":"my new todo"};
    $scope.todos.push(todo);
  }
})
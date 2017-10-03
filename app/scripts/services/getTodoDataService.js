angular.module("myApp")
.service("dataService", function($http){
  this.getMsg = function(){
    console.log("Serviec method");
  }
  this.getData = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  }

  this.deleteTodo  =function(todo){
    console.log("Todo deleted :" + todo.name);
  }
  this.saveTodo  =function(todo){
    console.log("Todo Saved :" + todo.name);
  }
});
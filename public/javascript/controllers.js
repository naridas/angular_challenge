toDoApp.controller('toDoController', ['toDoService', 'toDoFactory', function(toDoService, toDoFactory){
	var self = this;
  
  self.todos = toDoService.getAll();
  
  self.addToDo = function(task) {
  	self.todos.push(new toDoFactory(task));
  };
  
  self.removeLastToDo = function() {
  	self.todos.pop();
  };
}]);

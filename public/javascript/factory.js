toDoApp.factory('toDoFactory', function() {
  
  var Todo = function(task) {
    this.task = task;
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };
  
  Todo.prototype.complete = function () {
    this.completed = true;
  };
  
  return Todo;
});
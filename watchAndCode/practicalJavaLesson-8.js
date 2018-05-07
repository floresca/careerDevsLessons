var todoList = {
   todos: [],
   displayTodos: function(){
    if (this.todos.length === 0) {
      console.log('Your todo list is empty');
    } else {
      console.log('My todos:');
        for (var i = 0; i < this.todos.length; i++) {
          if (this.todos[i].completed === true) {
            console.log('(x)', this.todos[i].todoText);
          } else {
            console.log('( )', this.todos[i].todoText);
          }
        }
      }
    },
   addTodo: function(todoText){
     this.todos.push({
       todoText: todoText,
       completed: false
     });
     this.displayTodos();
    },
   changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
    },
    deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
    },
    toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    },
    
    toggleAll: function(){
      var totalTodos = this.todos.length;
      var completedTodos = 0;
      
      for (var i = 0; i < totalTodos; i++) {
        if (this.todos[i].completed === true) {
          completedTodos++;
        }
      }
      if (completedTodos === totalTodos) {
        for (var i = 0; i < totalTodos; i++){
          this.todos[i].completed = false;
        }
      } else {
        for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = true;
        }
      }
      this.displayTodos();
    }
 };
 
 var handlers = {
  displayTodos: function() {
   todoList.displayTodos();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
    toggleAll: function (){
    todoList.toggleAll();
   }
 };
 
 ~~~~~~~~~~~~~~~~~~
 
 Html 
 
 <!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <h1>Todo List</h1>
    
    <div>
    <button onclick="handlers.displayTodos()">Display Todos</button>
    <button onclick="handlers.toggleAll()">Toggle All</button>
    </div>
        
    <div>
    <button onclick="handlers.addTodo()">Add</button>
    <input type="text" id="addTodoTextInput"/>
    </div>
    
    <div>
      <button onclick="handlers.changeTodo()">Change Todo</button>
      <input type="number" id="changeTodoPositionInput"/>
      <input type="text" id="changeTodoTextInput"/>
    </div>
    
    <div>
      <button onclick="handlers.deleteTodo()">Delete Todo</button>
      <input type="number" id="deleteTodoPositionInput"/>
    </div>
    
    <div>
      <button onclick="handlers.toggleCompleted()">Toggle Completed</button>
      <input type="number" id="toggleCompletedPositionInput"/>
    </div>
    
    <script src="script.js"></script>
  </body>

</html>
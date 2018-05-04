var myComputer = {
    operatingSystem: "windows",
    screenSize: "16.5 inches",
    purchaseYear: 2011
};

myComputer.operatingSystem; //This command enters into the object "myComputer" and returns the called value

~~~

var andres= {
    name: "Andres",
    sayName: function() {
        console.log(this.name); //The "This" keyword calls out the object "andres"
    }
}

andres.sayName(); //This command pulls the function out of the object. 

~~~~~~~~~~~~~~~~~~~~~~~~~~

var todoList = {
   todos: [],
   displayTodos: function(){
     console.log('My todos:', this.todos);
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
    }
 };
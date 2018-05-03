var todos = ['item 1', 'item 2', 'item 3']

//It should have a function to display todos.
function displayTodos() {
    console.log('My todos:', todos);
}

//It should have a function to add todos.
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

//It should have a function to chance todos.
function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}

//it should have a function to delete todos.
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var myName = "Andres";
 
function sayName(){
    var secret = 'watchandcode';
    console.log(myName);
}


sayName() //this will work because things inside the local function can look at outside data
console.log(secret) // this will not work becase this global command cannot look inside the function

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Plunker

var todoList = {
   todos: ['item 1', 'item 2', 'item 3'],
   displayTodos: function(){
     console.log('My todos:', this.todos);
    },
   addTodo: function(todo){
     this.todos.push(todo);
     this.displayTodos();
    },
   changeTodo: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
    },
    deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
    }
 };
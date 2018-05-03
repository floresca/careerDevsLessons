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

var myName = "Andres";
 
function sayName(){
    var secret = 'watchandcode';
    console.log(myName);
}

Objective: Take inputs from a user to create a strock onject.
-Ticker, name, price, change, marketCap

Use constructor objects to build the object using the above information.
then, add the created object to a main object

see watch and code version 5
makeSandwichWith ______
    Get one slice of bread.
    Add ______.
    Put a slice of bread on top
    
function makeSandwichWith(filling) {
    Get one slice of bread;
    Add filling;
    Put a slice of bread on top;
}

makeSandwichWith _ham_
makeSandwichWith('ham')

function sayHiTo(person){
    console.log("hi", person);
}

sayHiTo('Andres')

~~~~~~~~~~~~~~~~~~~~~~~~

var todos = ['item 1', 'item 2', 'item 3']

function displayTodos() {
    console.log('My todos:', todos);
}

function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

addTodo()

~~~~~~~~~~~~~~~~~~~~~~~~~

function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}

changeTodo()

~~~~~~~~~~~~~~~~~~~~~~~~~

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo()

Objective: Take inputs from a user to create a strock onject.
-Ticker, name, price, change, marketCap

Use constructor objects to build the object using the above information.
then, add the created object to a main object

see watch and code version 5
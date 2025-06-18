//variable
//declare
//Clean Code
let count = 0; // declaring a variable named count and initializing it to 0
const imageElement = document.getElementById("image"); // getting the image element by its ID
const textElement = document.getElementById("text"); // getting the text element by its ID
// adding an event listener to the image element that listens for click events
imageElement.addEventListener("click", function() {
    count++; // incrementing the count variable by 1 each time the image is clicked
    console.log(count); // logging the current count to the console
    textElement.textContent = "You Clicked it: " + count + " times"; // updating the text content of the text element
});


// let count = 0;
// Name = "John";
// Age = 30;
// console.log(count);
// document.getElementById("image").addEventListener("click", function() {
//     count++;
//     console.log(count);
//     document.getElementById("text").textContent = "You Clicked it: "+ count+ " times";
// });
// variable declaration 
// let, var, const
// let - block scoped variable, can be reassigned
// var - function scoped variable, can be reassigned
// const - block scoped variable, cannot be reassigned
// variable declaration
let myVariable
var anotherVariable;
const constantVariable = "I cannot be changed"; // constant variable
// variable initialization
myVariable = "Hello, World!"; // initializing myVariable
anotherVariable = 42; // initializing anotherVariable
// console.log(myVariable); // output: Hello, World!
// console.log(anotherVariable); // output: 42
// JavaScript has dynamic typing, meaning variables can hold any type of data
// and can change types at runtime.

//variable types
let isActive = true; // boolean
let name = "John"; // string
let age = 30; // number 
weight = 70.5; // number (float)
let hobbies = ["reading", "gaming", "coding"]; // array
let person = { // object
    name: "John",
    age: 30,
    weight: 70.5
};

// variable naming conventions
let $dollarVar = "I can start with a dollar sign"; // valid
let _underscoreVar = "I can start with an underscore"; // valid
let camelCaseVar = "I can use camelCase"; // valid
let PascalCaseVar = "I can use PascalCase"; // valid
let snake_case_var = "I can use snake_case"; // valid
// let invalid-var = "I cannot use a hyphen"; // invalid
// let 123invalid = "I cannot start with a number"; // invalid
// variable reassignment
Counts = 10; // reassigning the value of count
console.log(Counts); // output: 10
// variable declaration keywords
var oldVar
let newVar
const constantVar = "I cannot be changed"; // constant variable
// console.log(newVar); // will cause an error because newVar is not defined yet    
newVar = "I am now defined"; // defining newVar
console.log(newVar); // output: I am now defined
"use strict";

//block - 1
var number1 = 2;
var square_of_number1 = number1 * number1;
console.log(square_of_number1);

var number2 = 3;
var square_of_number2 = number2 * number2;
console.log(square_of_number2);

// block - 2
//console.log(calculateSquare(2)); // hoisting

//function calculateSquare(num) {
//return num * num;
//}

// block - 3
//function defaultParam(param1 = 'some value') {
//console.log(param1);
//}

//defaultParam(); // no argument is passed
//defaultParam('overridden'); // argument is passed

// block - 4
//var variable_name = function function_name() { // named function expression
//console.log("Hello World");
//}

//var another_variable_name = function () {
//console.log("Hello World");
//}

// block - 5

//var variable_name = () => {
//// function body
//};

//function function_name() {
//// function body
//}

// block - 6

//(function immediately_invoked() {
//console.log("Hello World");
//})(); // notice the invoking parentheses

//(() => {
//console.log("hello world");
//})();

//(function iife(param1) {
//console.log(param1);
//})(1);

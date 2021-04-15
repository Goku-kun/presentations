"use strict";
// Function scopes and Block scopes

// Function Scope
function printHello() {
    //var variable = "Hello World";
    //console.log(variable);
}

printHello();
//console.log(variable);

// Block Scope
var anotherVariable = "Value 2";
{
    ////var anotherVariable = "Some other variable.";
    //let anotherVariable = "Some other variable.";
    //console.log(anotherVariable);
}
console.log(anotherVariable);

var outerVariable = 0;

//for (let outerVariable = 0; outerVariable < 10; outerVariable++) {
// doing nothing
//}
//
//console.log(outerVariable);

for (var outerVariable = 0; outerVariable < 10; outerVariable++) {
    //// doing nothing
}
console.log(outerVariable);

if (true) {
    //let thirdVariable = "Third variable";
    //console.log(thirdVariable);
}
//console.log(thirdVariable);
//console.log(anotherVariable);

var something = "SOmething";
var something = "other thing";

//let something = "SOmething";
//let something = "other thing";

// function and block scope example to demonstrate the correct usage of let or var
function numberLessThan10(number) {
    var result;
    if (number > 100) {
        //let result = "Greater than 100";
        var result = "Greater than 10";
    } else if (number > 10) {
        //let result = "Greater than 10";
        var result = "Greater than 10";
    } else {
        //let result = number;
        var result = number;
    }
    return result;
}

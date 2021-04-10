// Function scopes and Block scopes

// Function Scope
function printHello() {
    var variable = "Hello World";
    console.log(variable);
}

printHello();
//console.log(variable);

// Block Scope
{
    let anotherVariable = "Some other variable.";
    //console.log(anotherVariable);
}

if (true) {
    let thirdVariable = "Third variable";
    console.log(thirdVariable);
}
//console.log(thirdVariable);
//console.log(anotherVariable);

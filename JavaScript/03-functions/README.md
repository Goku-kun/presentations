---

title: Functions in JavaScript
author: Dharma (https://github.com/Goku-kun)
date: 2021-07-28

---

```

░░░░░██╗░█████╗░██╗░░░██╗░█████╗░░██████╗░█████╗░██████╗░██╗██████╗░████████╗
░░░░░██║██╔══██╗██║░░░██║██╔══██╗██╔════╝██╔══██╗██╔══██╗██║██╔══██╗╚══██╔══╝
░░░░░██║███████║╚██╗░██╔╝███████║╚█████╗░██║░░╚═╝██████╔╝██║██████╔╝░░░██║░░░
██╗░░██║██╔══██║░╚████╔╝░██╔══██║░╚═══██╗██║░░██╗██╔══██╗██║██╔═══╝░░░░██║░░░
╚█████╔╝██║░░██║░░╚██╔╝░░██║░░██║██████╔╝╚█████╔╝██║░░██║██║██║░░░░░░░░██║░░░
░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░░░░░░░╚═╝░░░
```


## Welcome, everyone!

### This month, we're learning about Functions in JS!

---


# What are Functions? Why are they needed?

> A set of statements that can be called upon or "invoked" many times, can take zero or more inputs(arguments, as we call them) and return zero or more outputs.

> OR

> A function is a reusable block of code that performs a specific task.


```javascript
var number1 = 2;
var square_of_number1 = number1 * number1;
console.log(square_of_number1);

var number2 = 3;
var square_of_number2 = number2 * number2;
console.log(square_of_number2);
```

## Advantages

1. Code looks clean and organized.
2. DRY principle is followed.

## Ways of creating Functions in JS

1. Function Declarations (my preferred way of creating a function)
2. Function Expressions (can be named or anonymous)
3. Arrow Functions (least preferred way of creating a function)
4. Using `Function` constructor (don't ever do it; security reasons)

---

# Function Declaration

To [ quote MDN ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions),
> A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

> 1. The name of the function.
> 2. A list of parameters to the function, enclosed in parentheses and separated by commas.
> 3. The JavaScript statements that define the function, enclosed in curly brackets, {...}.

I prefer using Function Declarations. 

If any JS statement starts literally with the *`function`* keyword, then it's a Function Declaration.

## Why?

1. Standard syntax (found across languages)
2. Only way to define a function which hoists
3. Has a name attached to it.


```javascript
console.log(calculateSquare(2)); // hoisting

function calculateSquare(num) {
        return num * num;
}
```

---

# Parameters & Arguments

- The placeholder which accepts a value as an input in the function is called a Parameter.
When declaring a function, we specify it's parameters.

- In the previous example, `num` is a parameter.

- The value passed into the function while it's being invoked is called an argument.

- In the previous example, the value `2` is an argument.


## Default Parameters

- Parameters can be assigned a default value.

- This default value is used when an argument value isn't passed into the function or if `undefined` is passed.

```javascript
function defaultParam(param1 = 'some value') {
    console.log(param1);
}

defaultParam(); // no argument is passed
defaultParam('overridden'); // argument is passed
```


---

# Function Expressions

- A different approach to creating a function is by using the Function Expressions syntax.

- These can be of 2 types: **Named** Function Expressions and **Anonymous** Function Expressions.

- Named Function Expressions are very uncommon. Very rarely encountered but should be used the most.

```javascript
var variable_name = function function_name() { // named function expression
        console.log("Hello World");
}

var another_variable_name = function () {
        console.log("Hello World");
}
```

### Always name your functions expressions.

### Why?

1. More self documenting code
2. More debuggable stack traces

---

# Arrow Functions 

With arrow functions, `function` keyword isn't used to define a function.

```javascript
var variable_name = () => {
    // function body
}

function function_name() {
    // function body
}
```
## (Don't use arrow functions as a general replacement of function declaration)

## Why?

1. They are syntactically anonymous (while debugging, stack traces might show up as "Anonymous Function")
2. It doesn't have a `this` keyword. It binds `this` lexically.

---

# IIFEs (Immediately Invoked Function Expressions)

- As the name suggests, these are function expressions which are invoked/called immediately where they're defined.

- The syntax involves wrapping the function into a set of parentheses () and then invoking it with another set of parentheses ().

```javascript

(
function immediately_invoked() {
    console.log("Hello World");
}
)(); // notice the invoking parentheses

```

- IIFEs can also be defined using arrow function syntax.

```javascript

(
() => {
        console.log("Hello World");
}
)
```


- Parameters can also be defined for IIFEs.

```javascript
(
function iife(param1) {
        console.log(param1);
}
)(1);
```

---

# Summary

## Declaration vs Expression vs Arrow

```javascript

// 01 Function Declaration
function function_name() {
    // body
}

// 02-a Function Expression (Named)

var variable_name = function function_name() {
        // body
}


// 02-b Function Expression (Anonymous)

var variable_name = function() {
        // body
}


// 03 Anonymous Function

var variable_name = () => {
    // body
}
```


- Prefer using Function Declaration
- Named Function Expression can also be used
- Don't use Anonymous Function Expression and Arrow Function unless absolutely necessary


---



# Questions?


#### Thank you!


Contact me:
- github: https://github.com/Goku-kun
- twitter: [ @nova_xronos ](https://twitter.com/nova_xronos)
- discord: Novaxronos#0001



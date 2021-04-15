---
title: Variables in JS
author: Dharma (https://github.com/Goku-kun)
date: 2021-04-15

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

### Let's get going.
---

# What does JS engine need to run any JS code?
                            
                            
                            

2 abilities

> 1. Ability to go through a line of code and execute it, line after line.
> 2. Ability to store data along the way. This data could be numbers, strings, even functions etc


This data is stored and later accessed via the identifiers.

[Definition of Identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)

---


# Variables

> They are containers used to hold values.

> This means all the variables either receive some value or we retrieve some value from them.

> These values could be hold literally or by pointing to a memory location.



To use variables, they have to be declared using:
- `var`
- `let`
- `const`


---

# Values

> Values are the data we want to store and process in our program.

> There are total 7 different types of values in JS.

1. Undefined
2. String
3. Boolean
4. Numeric Types: Number and Bigint
5. Null
6. Object
7. Symbol

> Variables are of 2 types broadly speaking.

1. Primitives - referenced by values
2. Non-Primitives - referenced by memory pointers; usually object

---

# Types of values based on how they're stored

## Type 1 - Primitives

* types that hold values by values

Code Example:

```JavaScript
var x = 5;
var y = x;
console.log(x);
console.log(y);
x = 10;
console.log(x);
console.log(y);
```
## Type 2 - Non-Primitives

* types that hold values by reference

Code Example:

```JavaScript
var x = [1,2,3];
var y = x;
console.log(x);
console.log(y);
y[2] =  [1,2,3];
console.log(x);
console.log(y);
```

---

# types associated to values

> JS associates types with values and not with variables.

```JavaScript
// var int x = 5;
var x = 5;
x = "Hello, World";
```

---

# var, let and const

So, is `var` the new `let`? 

and

is `const` really constant?


The short answer is no and no, for both, respectively.

Let's understand why is this the case.


---

# Scope

> Scope lays a boundary. And identifiers are bound by these boundaries.

> Scope instructs JS where it should look for an identifier.

There are two types of scopes:

1. Function scope
2. Block scope

### A scope is generally represented by a pair of curly braces - {}

But, this is not always true though.

// code from here



---

# So, is `var` the new `let`?

NO. Each should be considered as a tool and should be utilized in a situation that best suits it.

- `var` conveys the message of being more accessible when others look at the code you've written.

- `let` conveys the meaning that the value shouldn't be accessible as easily.


--- 

# What about `const`?
                   
                   
                   

Are the variables really constant, as in never changing over time?

```JavaScript
const variable = [1,2,3,4];
variable[0] = 15;
console.log(variable); // [15, 2, 3, 4]
```


---

# `const`

                    
                    

- `const` is like a `let` but with an added limitation.

- The message `const` tries to convey is that the variable should never be assigned again.

- It allows mutation meaning that the value stored in the variable changes over time.

---

# `const` is not constant over time

`const` doesn't allow re-assignment and doesn't mean that the value won't update over time.


---

# Questions?


#### Thank you!


Contact me:
- github: https://github.com/Goku-kun
- twitter: [ @nova_xronos ](https://twitter.com/nova_xronos)
- discord: Novaxronos#4244

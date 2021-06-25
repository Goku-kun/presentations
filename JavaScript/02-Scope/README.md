---
title: Scope in JS
author: Dharma (https://github.com/Goku-kun)
date: 2021-06-24

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

### Let's learn about Scopes in JavaScript!

---

# Is JS Compiled or Interpreted?

Well, the answer's a bit more complicated than that.

Let's understand using these simple code examples.

## Snippet - 01

```JavaScript
printHello();

function printHello() {
    console.log("Hello!");
}
```
## Snippet - 02

```JavaScript
console.log("This won't be printed!");

var variable1 = "Hello";

var variable2. = "World";
```


---

# What is a scope?
                            
                            
                            
                            

> To define simply, it's where you look for things.

> Things in the context of JS are identifiers like variables, function definition, or property.


---

# What is a scope? (continued)


> Scope lays a boundary. And identifiers are bound by these boundaries.

> Scope instructs JS where it should look for an identifier.

There are two types of scopes:

1. Function scope
2. Block scope

### A scope is generally represented by a pair of curly braces - {}

But, this is not always true though. (To understand this better, check out the notes for var & const)

---

# Scope is static and lexical


## What does "static" mean?

The scope is determined from where the functions are defined.
Not from where the functions are called.

## Snippet - 03


```JavaScript
function outer(){
    let variable1 = "This will be printed";
    
    function inner() {
        console.log(variable1);
    }

    return inner;
}

var gettingTheInner = outer();

let variable1 = "This won't be printed.";
gettingTheInner();

```

---

# Scope is static and lexical (continued)


## What does "lexical" mean?

The term lexical is determined from the "lexing" stage of compilation.

Lexical scope means that the scope is purely determined by the placement of functions, scope and variable declarations, in the program.

## Snippet - 04

```JavaScript
var variable1 = "This will be printed";

function accessinOtherScope() {
    console.log(variable1);
}

function otherScope() {
    var variable1 = "This won't be printed";

    accessinOtherScope();
}

otherScope();

```

---

# Conclusion

## Scope in JS is a very carefully crafted feature.
 
## With the right usage, you can create some professional functions like "once" and "memoize".





---

# Questions?


#### Thank you!


Contact me:
- github: https://github.com/Goku-kun
- twitter: [ @nova_xronos ](https://twitter.com/nova_xronos)
- discord: Novaxronos#0001

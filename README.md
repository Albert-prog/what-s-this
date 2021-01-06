# What's this?

## Story

This is a very powerful word in programming languages.
In your developer team some junior have struggles with this.
You decided to organise a live coding to clarify this for everyone.
For the presentation you need to create a reference code that you can use when you are stuck with a problem.
You've already created the skeleton, the only task you need to finish is to use the this keyword in the project.

## What are you going to learn?

- this

## Tasks

1. `this` works differently in functions. The output will be different if you use it in arrow functions and declared functions. Try out the two possibilities that you log a button element to the console in an arrow function and in a declared function.
    - The `logButtonAsArrowFunction()` function log out the button element
    - The `logButtonAsDeclaredFunction()` function log out the button element
    - One of the function uses the `this` keyword

2. `this` works differently with objects' methods and method references. Finish the `logAge()` function, it needs to log out the object's age. After, log out its age by creating a reference to the `logAge()` function.
    - The `logAge()` function log out the `person` object's age
    - The `logReferenceObjectsAge()` function log out the `person` object's age

3. There are different possibilities to focus `this`. Finish the `logAge()` and the `logAgeArrow()` method. They log out the reference object's age. Do this by creating a reference to the methods.
    - There are references to the reference object's `logAge()` and `logAgeArrow()` methods
    - Calling the 2 reference method, log out the object's age

## General requirements

None

## Hints

- When you got the log `undefined` for the this property, this will refer to the global context (window in browsers).
- With ES6, there is a possibility to bind an object to a function reference's this property with the `function.bind(object)` method.
In this case the function's `this` will be the `object` parameter.
- If you declare a class' function as arrow function, that will work as a property and the binding will be automatic.

## Background materials

- <i class="far fa-exclamation"></i> [this functionality with examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- <i class="far fa-video"></i> [this in javascript](https://www.youtube.com/watch?v=gvicrj31JOM)

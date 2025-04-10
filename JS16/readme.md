# JavaScript Closure Example

In JavaScript, when you define a function inside another function, the inner function has access to the variables and parameters of the outer function. Even if the outer function has finished running, the inner function still "remembers" those variables. This ability of the inner function to remember and access its outer function's variables is called closure.

Imagine you're baking cookies. You have a recipe (the outer function) that includes a list of ingredients (variables). Inside the recipe, you have steps (the inner function) to mix those ingredients. Even after you're done baking, the steps still remember the ingredients you used. That's like closure in JavaScript - the inner function remembers the variables from its outer function even after the outer function has finished executing.

In simpler terms, closure allows a function to remember and access its outer function's scope even after the outer function has finished running. It's like a backpack that the inner function carries with it, containing all the variables it might need from the outer function.

## Code Explanation

```javascript
function aParentFunc(a) {
  // Outer function
  return function bChildFunc(b) {
    // Inner function
    console.log("Sum: " + (a + b)); // Uses 'a' from the parent function's scope
  };
}

var aParentVar = aParentFunc(6); // 'aParentVar' now holds the inner function with 'a' as 6
var bChildVar = aParentVar(4); // 'bChildVar' now holds the result of calling the inner function with 'b' as 4
```

In this code:

- `aParentFunc` is a function that takes one parameter `a`. It returns another function `bChildFunc`.
- `bChildFunc` takes one parameter `b` and logs the sum of `a` (which is from the outer function's scope) and `b`.
- `aParentVar` is assigned the result of calling `aParentFunc(6)`, which means it now holds the inner function `bChildFunc` with `a` as 6.
- `bChildVar` is assigned the result of calling `aParentVar(4)`, which means it now holds the result of calling `bChildFunc` with `b` as 4.

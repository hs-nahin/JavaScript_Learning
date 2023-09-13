// Example 1
function add (a, b, c){
    console.log (a + b + c);
}

add (2, 3, 5);

// Example 2
function newAdd (num1, num2, num3){
    return num1 + num2 + num3;
}

let sum = newAdd (5, 10, 5);
console.log (sum);

//1.  Why return is Used?
/*
The `return` statement in a function serves a crucial purpose: it allows a function to send a value or result back to the part of the program where the function was called. Here's why the `return` statement is essential:

i. **Output**: Functions often perform calculations or operations and produce a result. The `return` statement enables a function to communicate this result to the rest of the program.

ii. **Data Flow**: In a program, data flows between different parts. The `return` statement is a way for a function to contribute to this data flow. It allows functions to be used as building blocks, with their results contributing to larger computations.

iii. **Reusability**: Functions are designed to be reusable. By using `return`, a function can provide different results based on the input or conditions each time it's called. This reusability is a fundamental concept in programming.

iv. **Decision-Making**: The result returned by a function can be used to make decisions in your code. For example, if a function calculates a person's age based on their Birthdate, you can use the returned age to determine if they are eligible for certain services or discounts.

v. **Error Handling**: Functions can use `return` to indicate errors or exceptional conditions. For instance, a function might return `null` or a specific error code if it encounters a problem, allowing the caller to handle errors appropriately.
*/


//2. What happens if nothing is written after return?
/*
If a `return` statement is used in a function without specifying a value or expression to return, it will exit the function immediately, and it will effectively return `undefined` by default. Here's an example:
*/
function doSomething(a) {
  // No return value specified
}

const result = doSomething(2);
console.log(result); // Output: undefined

/*
In this example, the `doSomething` function does not specify a return value. When you call `doSomething()`, it exits the function without providing any explicit value to return, so it returns `undefined`.

It's important to note that even if you don't write a `return` statement in a function, JavaScript will automatically insert a `return undefined;` statement at the end of the function if there's no explicit `return` statement. This behavior ensures that all functions in JavaScript return something, even if it's just `undefined`.

So, if you intend for a function to return a specific value or result, you should use the `return` statement to specify that value. If you don't need to return anything, you can omit the `return` statement or simply write `return;`, which will also result in the function returning `undefined`.
*/


// 3. What can be written after return?
/*
After the return statement in a JavaScript function, you can write an expression or a value that you want the function to return. This value can be of any valid JavaScript data type, such as numbers, strings, objects, arrays, or even other functions. Here are some examples:*/
// Returning an Array:
function getEvenNumbers() {
    return [2, 4, 6, 8];
  }

// Returning Another Function:
function getGreeter(greeting) {
  return function (name) {
    return greeting + ", " + name + "!";
  };
}

// Returning null or undefined (indicating no value):
function doNothing() {
    return null; // or return undefined;
  }
  
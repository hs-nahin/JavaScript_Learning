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

/*
The `return` statement in a function serves a crucial purpose: it allows a function to send a value or result back to the part of the program where the function was called. Here's why the `return` statement is essential:

1. **Output**: Functions often perform calculations or operations and produce a result. The `return` statement enables a function to communicate this result to the rest of the program.

2. **Data Flow**: In a program, data flows between different parts. The `return` statement is a way for a function to contribute to this data flow. It allows functions to be used as building blocks, with their results contributing to larger computations.

3. **Reusability**: Functions are designed to be reusable. By using `return`, a function can provide different results based on the input or conditions each time it's called. This reusability is a fundamental concept in programming.

4. **Decision-Making**: The result returned by a function can be used to make decisions in your code. For example, if a function calculates a person's age based on their Birthdate, you can use the returned age to determine if they are eligible for certain services or discounts.

5. **Error Handling**: Functions can use `return` to indicate errors or exceptional conditions. For instance, a function might return `null` or a specific error code if it encounters a problem, allowing the caller to handle errors appropriately.
*/
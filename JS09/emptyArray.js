// Empty Array Operations

// An empty array for demonstration purposes.
const emptyArray = [];

// Using map to create a new array by doubling each element (won't affect the original array).
const result = emptyArray.map(element => element * 2);
console.log("Result using map:", result);

// Using forEach to iterate over each element (won't create a new array).
const FinalResult = emptyArray.forEach(element => element * 2);
console.log("Result using forEach:", FinalResult);
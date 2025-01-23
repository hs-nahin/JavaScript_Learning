// ------------------
// Primitives (Stack)
// ------------------
// Primitives are stored BY VALUE in the Stack

let age = 10; // Stack: age = 10
let secondAge = 15; // Stack: secondAge = 15

age = secondAge; // COPY value: age = 15 (secondAge's value)
secondAge = 20; // Only updates secondAge. age REMAINS 15 (not "name" as in original comment)

const info = { age, secondAge };
console.log(info); // { age: 15, secondAge: 20 } ✅ Correct

// ------------------
// Objects (Heap)
// ------------------
// Objects are stored in the Heap. Variables hold REFERENCES (memory addresses) to objects.

let user = { name: "Alex", age: 30 }; // Heap: Creates object at address "0x1234"
let employee = { name: "Sam", age: 25 }; // Heap: Creates object at address "0x5678"

user = employee; // COPY REFERENCE: user now points to "0x5678" (same as employee)
// The original { name: 'Alex' } object becomes unreachable and will be garbage-collected

console.log(user); // { name: 'Sam', age: 25 } ✅ Correct (both point to same object)
console.log(user === employee); // true ✅ (same reference)

// ------------------
// Shared Mutations
// ------------------
// Since user and employee point to the SAME OBJECT, changes affect both variables

user.name = "John"; // Updates the shared object at "0x5678"
employee.name = "Jane"; // Overwrites previous change to name
employee.age = 45; // Updates the shared object's age

console.log(user); // { name: 'Jane', age: 45 } ✅ Correct
console.log(employee); // { name: 'Jane', age: 45 } ✅ Correct

let info = {};

let age = 10;
let secondAge = 15;

age = secondAge; // COPY secondAge's value (15) to age. Now both are 15.

secondAge = 20; // Change secondAge's value. name REMAINS 15.

info = { age, secondAge };
console.log(info); // { age: 15, secondAge: 20 }


// ------------------
//  Stack and Heap
// ------------------
// Stack: Stores primitive values and references to objects in the heap.
// Heap: Stores objects and their data.

let user = { name: 'Alex', age: 30 };
let employee= { name: 'Sam', age: 25 };

user = employee; // COPY employee's reference to user. Now both point to the same object.
console.log(user); // { name: 'Sam' }
console.log(user.name === 'Alex'); // false
console.log(user.name === 'Sam'); // true
console.log(employee); // { name: 'Sam' }
console.log(employee.name === 'Sam'); // true
console.log(user === employee); // true
console.log('------------------');
// Suppose address or reference of user is "0x1234" and employee is "0x5678".
// When we assign employee to use as user = employee, we actually assign "0x5678" to "0x1234" or user = "0x5678".
user.name = 'John'; // Change the object's name property. Both user and employee point to the same object.
employee.name = 'Jane'; // Change the object's name property. Both user and employee point to the same object.
employee.age = 45; // Change the object's age property. Both user and employee point to the same object.
console.log(user); // { name: 'Jane', age: 45 }
console.log(user.name === 'John'); // false
console.log(user.name === 'Jane'); // true
console.log(employee); // { name: 'Jane', age: 45 }
console.log(employee.age === 45); // true
console.log(employee.age === 25); // false
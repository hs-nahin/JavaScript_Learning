'use strict'; // Enabling strict mode for the entire script

let obj = {
    name: "nahin",
    age: 24
}

// Prevents any extensions to the object, meaning no new properties can be added
Object.preventExtensions(obj);


// In sloppy mode, this will silently fail. The 'job' property will not be added.
// In strict mode, this will throw a TypeError since the object is non-extensible
obj.job = "Student"; // This line will cause a TypeError in strict mode

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.job); // In Sloppy Mode | Output: undefined
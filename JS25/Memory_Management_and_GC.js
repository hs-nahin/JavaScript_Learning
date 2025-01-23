// 🧠 MEMORY MANAGEMENT IN JAVASCRIPT (CALL STACK & HEAP)

// ========================
// 1. THE MEMORY PLAYGROUND
// ========================
// JavaScript has two memory areas:
// - Call Stack (for simple values)
// - Heap (for complex values)

// 🟢 PRIMITIVE VALUES (Call Stack)
// These are simple, like numbers and booleans
let age = 10;      // Stored directly in the stack
let isChild = true;// Like putting toys in small boxes

// 🟠 NON-PRIMITIVE VALUES (Heap)
// These are complex, like objects and arrays
let puppy = { 
  name: "Biscuit", // Stored in heap
  age: 3           // Stack keeps a REFERENCE (address) to the heap
};
// Think of heap like a big toy storage room!

// ======================
// 2. HOW IT WORKS
// ======================

// 🎯 Example 1: Stack Operations
let x = 5; // Stack: [x=5]
let y = x; // COPY value: Stack: [x=5, y=5]
x = 10;    // Stack: [x=10, y=5]

// 🎯 Example 2: Heap Operations
let toyBox1 = ["teddy", "ball"]; // Heap stores array, stack keeps address
let toyBox2 = toyBox1;           // COPY the address, not the actual toys!

toyBox1.push("train"); 
console.log(toyBox2); // ["teddy", "ball", "train"] 😲 Both point to same heap location

// ======================
// 3. GARBAGE COLLECTION 🗑️
// ======================
// JavaScript automatically cleans up unused memory!

// 🎯 Example 3: Creating and removing toys
function play() {
  let tempToy = "spinning top"; // In stack
  let bigToy = { type: "legos" }; // Heap (ref in stack)
} 

play(); // When done:
// - tempToy is removed from stack
// - bigToy's REFERENCE is removed
// 🗑️ Garbage collector will clean heap legos when ready!

// 🎯 Example 4: Breaking references
let parkVisitors = [{name: "Alice"}, {name: "Bob"}];
parkVisitors = null; // Break the reference
// Now the two objects in heap can be cleaned 🧼

// ======================
// 4. CALL STACK IN ACTION 📚
// ======================
// Like stacking books - last in, first out!

function makeCookie() {
  mixIngredients();
  bake();
}

function mixIngredients() {
  stir(); // Add to top of stack
}

function stir() {
  console.log("Stirring!"); // First to finish
}

function bake() {
  console.log("Baking!"); // Last to finish
}

makeCookie(); // Stack order: makeCookie -> mixIngredients -> stir
// Then unstacks in reverse: stir -> mixIngredients -> bake -> makeCookie

// ======================
// 5. MEMORY RULES TO REMEMBER 🧠
// ======================
// 1. Primitives go in stack (numbers, strings, booleans)
// 2. Complex values go in heap (objects, arrays, functions)
// 3. Variables hold either VALUES (stack) or REFERENCES (heap)
// 4. Garbage collector cleans unused heap items automatically
// 5. Call stack manages function order (like a todo list pile)

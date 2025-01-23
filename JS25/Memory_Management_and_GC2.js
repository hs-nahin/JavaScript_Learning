// ======================
// 1. PRIMITIVES VS OBJECTS
// ======================

// 🟢 Stack Example (Primitives)
let iceCream = "vanilla";
let copyIceCream = iceCream; // Copy the value

console.log("Before change:");
console.log(iceCream);        // "vanilla"
console.log(copyIceCream);    // "vanilla"

iceCream = "chocolate";       // Change original

console.log("After change:");
console.log(iceCream);        // "chocolate" 🍨
console.log(copyIceCream);    // "vanilla" ❄️ (didn't change!)

// 🟠 Heap Example (Objects)
let myToyBox = ["doll", "car"];
let friendsToyBox = myToyBox; // Copy the REFERENCE (address)

console.log("\nBefore push:");
console.log(myToyBox);        // ["doll", "car"]
console.log(friendsToyBox);   // ["doll", "car"]

myToyBox.push("puzzle");      // Change through one reference

console.log("After push:");
console.log(myToyBox);        // ["doll", "car", "puzzle"]] 🧩
console.log(friendsToyBox);   // Same as above! They share toys!

// ======================
// 2. GARBAGE COLLECTION DEMO
// ======================

function playWithToys() {
  let tempToy = "yo-yo";      // In stack
  let bigToy = { type: "slide" }; // In heap
  
  console.log("\nInside playWithToys():");
  console.log(tempToy);       // "yo-yo"
  console.log(bigToy);        // {type: "slide"}
}

playWithToys();
// After function finishes:
console.log("\nAfter playWithToys():");
// console.log(tempToy);      // Would ERROR! Removed from stack
// console.log(bigToy);       // Would ERROR! Reference gone 🗑️

// ======================
// 3. CALL STACK DEMO
// ======================

function buildSandcastle() {
  console.log("🏰 Starting to build...");
  gatherSand();
  addFlags();
}

function gatherSand() {
  console.log("⏳ Gathering sand...");
  makeBase();
}

function makeBase() {
  console.log("🟫 Making base...");
}

function addFlags() {
  console.log("🚩 Adding flags!");
}

console.log("\nBuilding process:");
buildSandcastle();
/* Output ORDER shows call stack order:
🏰 Starting to build...
⏳ Gathering sand...
🟫 Making base...
🚩 Adding flags!
*/

// ======================
// 4. BREAKING REFERENCES
// ======================

let zoo = [{ animal: "🦁" }, { animal: "🐘" }];
console.log("\nOriginal zoo:", zoo);

zoo = null; // Break the reference
console.log("After nulling:", zoo); // Now empty! 🚮
// The lion and elephant can now be garbage collected

// ======================
// 5. QUICK TEST YOURSELF!
// ======================

let a = 5;
let b = a;
a = 10;

console.log("\nTest 1 - Primitives:");
console.log("a:", a); // 📌 What will this show?
console.log("b:", b); // 📌 What about this?

let house1 = { rooms: 3 };
let house2 = house1;
house1.rooms = 5;

console.log("\nTest 2 - Objects:");
console.log("house1:", house1.rooms); // 📌 Guess first
console.log("house2:", house2.rooms); // 📌 Then check!
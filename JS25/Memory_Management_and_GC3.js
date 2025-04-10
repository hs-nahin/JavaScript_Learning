// Initial values
let count = 10;   // Memory: count = 10
let item = 15;    // Memory: item = 15

count = item;     // COPY item's value (15) to count. Now both are 15.
item = 20;        // Change item's value. Count REMAINS 15.

console.log(count); // 15 (unchanged by later updates to item)
console.log(item);  // 20

// Let's use a loop to show they're independent
for (let i = 1; i <= 3; i++) {
  item ++; // Increment item in each iteration
  count++;    // Increment count in each iteration
  console.log(`
    Iteration ${i}: 
    count = ${count}, 
    item = ${item}
  `);
}

// Final values:
// count = 16, 17, 18 
// item = 21, 22, 23
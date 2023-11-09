// Create an array named 'marriage' with initial values "Nusrat" and "Jahan".
let Love = ["Nusrat", "Jahan"];

// Add a new element "Mim" to the 'marriage' array.
Love.push("Mim");

// Use a for loop to iterate over each element in the 'marriage' array.
// The loop initializes with i = 0, continues as long as i is less than the length of the array, and increments i after each iteration.
for (let i = 0; i < Love.length; i++) {
    // Print each element of the 'marriage' array to the console.
    console.log(Love[i], i);
    console.log(Love, i);
}
console.log ("_____")
// Print the entire 'Love' array to the console after the loop.
console.log(Love);

// JS Fundamentals

// 1. Declaring a variable :
// Using 'const' for variables that won't be reassigned and 'let' for variables that can be reassigned
const firstName = "Hasnat";
let lastName = "Shahariyar";
lastName = " Shahriyar"; // Reassigning the 'lastName' variable
console.log(`Full Name : ${firstName + lastName}`);

// 2. Conditions :
// Basic conditions using >, <, === (equal to), !== (not equal to), <= (less than or equal to), >= (greater than or equal to)
// Multiple conditions using && (logical AND) and || (logical OR)
if (firstName === "hasnat" || lastName === "Shahriyar") {
    console.log("Full Name has been declared!");
} else if (firstName === "Hasnat") {
    console.log("Full Name has been declared 2!");
} else {
    console.log("There are problems when declaring Full Name!");
}

// 3. Array Declare :
// Creating an array, accessing elements by index, getting array length, and adding elements
const numbers = [5, 10, 15, 20, 25];
numbers[5] = 30; // Adding a new element at index 5
numbers.push(35); // Appending an element to the end of the array
console.log(numbers[1]); // Accessing and printing the element at index 1
console.log(numbers);
let popLastArray = numbers.pop(); // Removing and returning the last element
console.log(popLastArray);
console.log(numbers);

// 4. For Loop :
// Using a 'for' loop to iterate through the array and print each element
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. Function :
// Declaring and calling a function that multiplies two parameters and returns the result
function multiply(a, b) {
    const total = a * b;
    return total;
}
const finalResult = multiply(5, 7);
console.log(finalResult);

// 6. Object :
// Creating an object with properties and an array as a property value
const bio = {
    name: "Hasnat",
    studies: "CSE",
    age: 23,
    skill: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
}

// Accessing object properties by name using dot notation or square brackets
let Name = bio.name;
let Age = bio["age"];
let Studies = bio.studies;
let Skill = bio.skill;
console.log(bio);
console.log(Name, Age, Studies, Skill);
console.log(`My Name is : ${Name} and my Age is : ${Age}, I am currently doing my Bachelors in : ${Studies} and I have Skills on : ${Skill[3]}`);

// ES6

// Declaring an array and an object
const numbers = [5, 15, 25, 35];
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

// 1. Template String
// Using template strings for more convenient string interpolation
console.log(`My Name is : ${Name} and my Age is : ${Age}, I am currently doing my Bachelors in : ${Studies} and I have Skills on : ${Skill[3]}`);

// 2. Arrow Function
// Declaring arrow functions with different syntaxes
const getFiftyFive = () => 55;
const addition = num => num + 5;
const isEven = x => x % 2 == 0;
const multiplePara = (x, y, z) => x + y + z;
const multiLine = (num1, num2) => {
    const sum = num1 * num2;
    return sum;
}

// Using arrow functions and testing them
const total = addition(5);
console.log(total);

const finalSum = multiLine(5, 5);
console.log(finalSum);

// 3. Spread Operator
// Using the spread operator to create a new array without modifying the original one
const newNumbers = numbers;
const newNumbers1 = [...numbers, 50]; // Adding 50 to a new array using spread
numbers.push(45); // Modifying the original array

// Printing the arrays to see the effects
console.log(newNumbers); // This will also be modified because it refers to the same array as 'numbers'
console.log(newNumbers1); // This will remain unchanged because it's a new array created with spread

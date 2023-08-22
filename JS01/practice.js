// Number
let x, y;
x = 5;
y = 5 * 2;

let sol = x + y;

console.log(sol);
console.log(typeof x);

// String
let nameOne, nameTwo; 
nameOne = "Hasnat";
nameTwo = " Shahriyar";

let fullName = nameOne + nameTwo;

console.log(fullName);
console.log(typeof nameOne);

// Boolean
let a, b;
a = true;
b = false;

console.log(a, b);
console.log(typeof a);

// String - lowercase to uppercase
let lowToUp = "Hi, i am hasnat shahriyar"
let upToLow = "HI, I AM HASNAT SHAHRIYAR"

console.log (lowToUp.toUpperCase());
console.log (upToLow.toLowerCase());

// Split Method
let friends = "Nahin, Emon, Masud, Shad, Himel, Sumon";

console.log(friends.split("Sumon"));

// Index of
console.log(friends.indexOf("Sumon"));

// parseFloat()
let num1, num2;
num1 = "55"; //This is a String
num2 = 45;

num1 = parseFloat(num1); //To convert a string into a Number we use "parseFloat()"
let total = num1 + num2;
console.log(total);
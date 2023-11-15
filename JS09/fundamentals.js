// JS Fundamentals

// 1. Declaring a variable :
const firstName = "Hasnat";
let lastName = "Shahariyar";
lastName = " Shahriyar";
console.log (`Full Name : ${firstName + lastName}`);

// 2. Conditions : 
// 6 Basic Conditions : >, <, ===, !==, <=, >=
//  Multiple Conditions : &&, ||
if (firstName === "hasnat" || lastName === "Shahriyar"){
    console.log ("Full Name has been declared!");
} else if (firstName === "Hasnat"){
    console.log ("Full Name has been declared 2!");
} else {
    console.log ("There are problems when declaring Full Name!");
}

// 3. Array Declare :
// Index of an Arary
// Length, Push of an Arary
const numbers = [ 5, 10, 15, 20, 25 ];
numbers[5] = 30;
numbers.push(35);
console.log (numbers[1]);
console.log (numbers);
let popLastArray = numbers.pop();
console.log (popLastArray);
console.log (numbers);
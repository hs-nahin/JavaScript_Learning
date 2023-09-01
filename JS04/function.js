// Function Declaration
function newFun (){
    console.log("Stand Up");
    console.log("Walk Towards the Switch");
    console.log("Press The Switch");
}

// Call the Function
newFun();
newFun();
newFun();

// Example
function math (a, b) {
    console.log (a * b);
}

math (5, 2);
math (5, 4);
math (2, 5);

// Example 2 
function newFunc (num1){
    var total = num1 * 4;
    return total;
}

var x = newFunc (5);
console.log (x);

var y = newFunc (6);
console.log (y);

// Example 3
function who (name, time){
    console.log (name + " have been Sleeping for " + time + " hours");
}

who("I", 7);
who ("He", 8);
who ("Rakib", 10);

// Example 4
function ex4 (c, d){
    return c + d;
}

let n = ex4 (10, 3);

console.log (n + 10);

// Example 5 
// let carName = "Toyota";
function carFunction (){
    let carName = "Hyundai";
    console.log (carName);
}

var carName = "Honda";
carFunction ();
console.log(carName);
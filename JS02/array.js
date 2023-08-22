var multiNum = [10, 15, 20, 25, 30];
var multiName = ['Nahin', 'Emon', 'Masud', 'Shad', 'Mehedi'];

// Length of an array
console.log(multiName.length);

// Index of an array
console.log(multiNum[0]);

// Push
multiName.push('Rakib');
multiName.push('Sajib');
console.log(multiName);

// Pop
multiName.pop();
console.log(multiName);

// Comparison
console.log(5<6);
console.log(6<5);

// Even
console.log(5 == 6);
console.log(6 == 6);

// Not Equal
console.log(6 != 6);
console.log(5 != 6);

// Less than or Equal
console.log(5 <= 5);
console.log(6 <= 5);
console.log(5 <= 6);

// Condition
// Example 1
var Keyboard = 1500;
var Mouse = 550;
var myBudget = 1000;

if (Keyboard < myBudget){
    console.log("Will Buy The Keyboard");
}

else{
    console.log("Will Buy The Mouse Instead");
}

// Example 2
var graduate = true;
var salary = 45000;
car = 0;

if (graduate == true && salary > 40000 || car >=1){
    console.log("She will marry me");
}

// Loop variable
// Example 2
var roastGiven = 0;
while (roastGiven < 7) {
    console.log("You have to give me the roast!")
    console.log(roastGiven);
    roastGiven++;
}
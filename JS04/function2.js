// Example 1
function bringShingara(money){
    var ShingaraPrice = 10;
    var quantity = money / ShingaraPrice;
    return quantity;
}

var myTaka = 400;
var ShingaraQuantity = bringShingara (200);
var Shamucha = bringShingara (myTaka);
console.log ("The number of people that will eat Shingara : "+ ShingaraQuantity);
console.log ("The Number of people that will eat Shamucha : " + Shamucha);

// Example 2
function getAverage(assignment1, assignment2, assignment3){
    const total = (assignment1 + assignment2 + assignment3);
    const average = (total / 3);
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 57;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);

console.log ("My Average Marks so far is : ", myAverage);
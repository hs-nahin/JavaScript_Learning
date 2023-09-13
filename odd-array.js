// Example 1
function sumOfArray (arrayNumbers) {
    console.log (arrayNumbers);
}

var arrayNumbers = [10, 12, 13, 15, 17, 19, 20];

sumOfArray(arrayNumbers);

// Example 2
function getSumOfArray (numbers){
    for (i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers [index];
        console.log (index, element);
        // console.log (element);
    }
}
const ArrayNumber = [10, 13, 15, 20, 25, 24, 50];
getSumOfArray (ArrayNumber);

// Example 3
function oddNumberOfArray (number2){
    const oddNumber = []
    for (let i = 0; i < number2.length; i++){
        const index = i;
        const element = number2 [index];
        if (element % 2 !== 0){
            console.log (index, element);
            oddNumber.push (element);
        }
    }
    return oddNumber;
}

const newNumber = [12, 65, 78, 32, 45, 101];
const oddNumber = oddNumberOfArray (newNumber);
console.log (oddNumber);

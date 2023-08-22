var numbers = ['5', '10', '15', '20', '25', '30'];
for ( var i = 0; i < numbers.length; i++){
    var number = numbers [i];
    if (number > 20){
        break;
    }
    console.log(number)
}

// Continue
console.log("Continue")

for ( var i = 0; i < numbers.length; i++){
    var number = numbers [i];
    if (number > 19){
        continue;
    }
    console.log(number)
}
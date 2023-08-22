for (var i = 0; i < 10; i++){
    if (i == 5){
        console.log("Break Now")

    }
    console.log(i);   
}
console.log("--------")
// Break
for (var i = 0; i < 10; i++){
    if (i == 5){
        console.log("Break Now")
        break;
    }
    console.log(i);   
}
console.log("----------")
// Continue
for (var i = 0; i < 10; i++){
    if (i == 5){
        console.log("Break Now")
        continue;
    }
    console.log(i);   
}
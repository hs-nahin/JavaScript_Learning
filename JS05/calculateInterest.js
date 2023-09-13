function calculateSimpleInterest(principle, rate, time){
    const interest = (principle * rate * time) /100;
    return interest;
}

var compoundInterest = calculateSimpleInterest (5000, 2, 3);

console.log (`Compound Interest : ${compoundInterest}`);



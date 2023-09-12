// Example 1
function leapYear (year){
    const reminder = year % 4;
    if (reminder === 0){
        console.log (`The Year ${year} is Leap Year`);
    } else {
        console.log (`The Year ${year} is Not Leap Year`);
    }
}

leapYear (2023);
leapYear (2020);

// Example 2
function leapYear2 (year2){
    const reminder2 = year2 % 4;
    if (reminder2 === 0){
        return true;
    } else {
        return false;
    }
}

var myLeapYear = leapYear2 (2023);
console.log ("My Leap Year is : ", myLeapYear);
var herLeapYear = leapYear2 (2020);
console.log ("Her Leap Year is : ", herLeapYear);
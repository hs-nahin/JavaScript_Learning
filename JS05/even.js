// ভাগশেষ শুন্য হলে বুঝবো এটা একটা জোড় সংখ্যা 
// If the quotient is zero, it means it is an even number

console.log (44%2);
console.log (22%2);
console.log (100%2);
console.log (124800%2);

// ভাগশেষ এক হলে বুঝবো এটা একটা বিজোড় সংখ্যা 
// If the quotient is One, it means it is an odd number
// Example 1
console.log (23%2);
console.log (45%2);
console.log (103%2);
console.log (124807%2);

// Example 2
function isEven (number){
    const reminder = number % 2;
    if (reminder === 0){
        console.log ("The Number is Even");
    } else{
        console.log ("The Number is Odd");
    }
}

isEven (205);
isEven (505);
isEven (204);

// Example 3
function isEven2 (number2){
    const reminder2 = number2 % 2;
    if (reminder2 === 0){
        return true;
    } else{
        return false;
    }
}

var myNumberIsEven = isEven2 (205);
console.log (myNumberIsEven);

var herNumberIsEven = isEven2 (204);
console.log (herNumberIsEven);
// Number
var number = 555;
console.log (typeof number);

// String
var strng = '555';
console.log(typeof strng);

// Boolean
var IamHappy = true;
console.log(typeof IamHappy);

// Undefined
var KichuNa;
console.log(typeof KichuNa);

// For 0.1 and 0.2 এর ক্ষেত্রে একটা সমস্যা হয় এই দুটো sum করলে অনেক বেশি সংখ্যা দেখায় । সেক্ষেত্রে এটার সল্যুশন হচ্ছে tofixed করে দেওয়া

// Problem
var NumOne = 0.1;
var NumTwo = 0.2;
var sum1 = NumOne + NumTwo;
console.log(sum1);

// Solution
sum1 = sum1.toFixed(1);
console.log(sum1);

// ভাগ করার নিয়ম
var mangoes = 30;
var persons = 5;
console.log(mangoes/persons);
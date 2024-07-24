let input = " JavaScript ";

let trim = str => str.trim();
let wrapInDiv = str => `<div>${str}</div>`;
const lowerCase = str => str.toLowerCase();

const result = wrapInDiv(trim(input));
const trimResult = trim(input);
const lowerCaseResult = lowerCase(trim(input));

console.log(result);
console.log(input);
console.log(trimResult);
console.log(lowerCaseResult);
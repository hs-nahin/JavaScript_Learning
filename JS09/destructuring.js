// 1. Array Destructuring
const numbers = [23, 24];
const [x, y] = numbers;

console.log (x, y);

const student = {
    name : "Hasnat Shahriyar",
    age : 23,
    skills : ["JavaScript", "React"]
}
const [firstSkill, SecondSkill] = student.skills;

console.log (firstSkill, SecondSkill);

// 2. Object Destructuring
const {Name, Age} = {
    Name : "hasnat",
    Age : 24
}

console.log (Name, Age);
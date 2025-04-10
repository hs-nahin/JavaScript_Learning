let Person = function (name, age, fieldOfProfession) {
    this.name = name;
    this.age = age;
    this.profession = fieldOfProfession;
}

let nahin = new Person ("Nahin", 24, "Software Engineer");
let mim = new Person ("Mim", 19, "Textile Engineer");

console.log(nahin);
console.log(`${nahin.name} is ${nahin.age}, and a ${nahin.profession}`);
console.log();
console.log(mim);
console.log(`${mim.name} is ${mim.age}, and a ${mim.profession}`);
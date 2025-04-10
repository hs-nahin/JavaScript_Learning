let Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBirth = function () {
        let currentYear = new Date().getFullYear();
        console.log(`${this.name} is a ${this.job}, and his date of birth is ${currentYear - this.age}`);
    }
}

let nahin = new Person("Nahin", 24, "Software Engineer");
let mim = new Person("Mim", 19, "Textile Engineer");

nahin.dateOfBirth();
mim.dateOfBirth();
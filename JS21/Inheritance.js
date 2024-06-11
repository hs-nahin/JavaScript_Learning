// Constructor function for Person
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

// Adding method to Person prototype to calculate and log date of birth
Person.prototype.dateOfBirth = function () {
    let currentYear = new Date().getFullYear();
    console.log(`${this.name} was born in ${currentYear - this.age}`);
}

// Log the Person prototype to see the properties and methods
console.log(Person.prototype);

// Create an instance of Person
let nahin = new Person("Nahin", 24, "Software Engineer");
nahin.dateOfBirth();
console.log(nahin);

// Add nationality property to Person prototype
Person.prototype.nationality = "American";

// Access the nationality property from the instance
console.log(nahin.nationality);

// Adding method to Person prototype to print details of the person
Person.prototype.printDetails = function() {
    console.log(`${this.name} is ${this.age} years old and is a ${this.job}. And he is an ${this.nationality}`);
}

// Create another instance of Person
let john = new Person("John", 52, "SQA Engineer");
john.printDetails();

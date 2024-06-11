let Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

let Teacher = function (name, age, job, subject) {
    Person.call(this, name, age, job);
    this.subject = subject;
}

let shad = new Teacher("Shad", 23, "Teacher", "Math");

console.log(`Name: ${shad.name},
Age: ${shad.age},
Profession: ${shad.job},
Subject: ${shad.subject}.`);
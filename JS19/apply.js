let rakib = {
    name: 'Rakib',
    dob: 1999,
    age: function (currentYear, age) {
        console.log(`${this.name} is ${currentYear - this.dob} years ${age}.`);
    }
}

let nahin = {
    name: "Nahin", 
    dob: 2000,
}

rakib.age(2024);
rakib.age.apply(nahin, [2024, 'old']);
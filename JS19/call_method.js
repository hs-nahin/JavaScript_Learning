let rakib = {
    name: 'Rakib',
    dob: 1999,
    age: function (currentYear) {
        console.log(`${this.name} is ${currentYear - this.dob} years old.`);
    }
}

let nahin = {
    name: "Nahin", 
    dob: 2000,
}

rakib.age(2024);
rakib.age.call(nahin, 2024);
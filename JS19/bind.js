let rakib = {
    name: 'Rakib',
    dob: 1999,
    age: function (currentYear, age) {
        console.log(`${this.name} is ${currentYear - this.dob} years ${age}`);
    }
}

let nahin = {
    name: "Nahin", 
    dob: 2000,
}

rakib.age.bind(nahin, 2024);
// let bindFunc = rakib.age.bind(nahin, 2024, 'old!');
// bindFunc();

let bindFunc = rakib.age.bind(nahin);
bindFunc(2024, 'old!');
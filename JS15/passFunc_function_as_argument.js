// Passing one function to another as an argument and invoking it within the receiving function.

function callMyName(name, callback) {
    let myAge = 24;
    callback(myAge);
    console.log('Hello, My name is '+ name);
}

function hello(age) {
    console.log('I am ' + age + ' years old');
}

callMyName('Hasnat', hello);

// Define a function callMyName which takes two arguments: name and callback.
// Inside callMyName, set myAge to 24, then call the callback function with myAge as argument.
// Print 'Hello, My name is ' concatenated with the provided name.
// Define a function hello which takes one argument: age.
// Inside hello, print 'I am ' concatenated with the provided age and ' years old'.
// Call callMyName with 'Hasnat' as the name and hello as the callback function.
// This will print 'I am 24 years old' followed by 'Hello, My name is Hasnat'.

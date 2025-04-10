var name = ['nahin', 'rakib', 'hasib', 'mehedi', 'shad'];

// Remove 1 item starting from index 2
name.splice(2, 1);
console.log(name); // Output: ['nahin', 'rakib', 'mehedi', 'shad']

// If no second parameter is provided, it removes all items after the specified index
var x = [10, 20, 30, 50, 40, 50];

// Remove all items starting from index 3
x.splice(3);
console.log(x); // Output: [10, 20, 30]

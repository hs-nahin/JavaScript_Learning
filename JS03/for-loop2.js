// Example 1
let todolist = [
    "Cleaning Room",
    "Brush Teeth",
    "Shower",
    "Eating Breakfast",
    "Study JavaScript",
];


//"i" is just random variable, it's common to be used in a "for loop" it stands for an "index"
// i is 
for (let i = 0; i < todolist.length; i++){ 
    console.log (i, todolist[i] + "!");
    // todolist[i] = todolist[i] + "!";
}

/*
1. `for`: Think of this as the start button for a task.

2. `let i = 0`: You're getting ready to do something, and you start counting from 0.

3. `i < todolist.length`: You'll keep doing this thing as long as the number you're counting (i) is less than the total number of things on your to-do list.

4. `i++`: After each time you do the thing, you add 1 to the number you're counting (i). This helps you move to the next item on your to-do list.

So, when you put it all together, this "for" loop helps you go through each item on your to-do list (like checking off tasks one by one), starting from the first item (number 0) and continuing until you've finished everything on your list.
[There are 5 items in the todolist so the loop will start from "clean room" (0) and end with "study JavaScript"(4)]
*/


// Write a loop that returns the number from 1 to 100
console.log("Write a loop that returns the number from 1 to 100.");
for (let i = 0; i <=100; i++){
    console.log (i);
}
/*
In this loop:

- `let i = 1` initializes a variable `i` to 1.
- `i <= 100` is the condition that specifies when the loop should continue running. It will continue as long as `i` is less than or equal to 100.
- `i++` is the increment statement. It increases the value of `i` by 1 in each iteration of the loop.

The `console.log(i)` statement inside the loop will print the numbers from 1 to 100 to the console. If you want to use the numbers in some other way, you can replace `console.log(i)` with your desired code.
*/

// All odd numbers between 50 and 80 will be displayed.
console.log("All odd numbers between 50 and 80 will be displayed.");
for (i = 51; i <= 79; i+=2){
    console.log (i);
}

/* 
In this loop:

- We start the loop with `let i = 51` to ensure we begin with the first odd number in the given range.
- The condition `i <= 79` ensures that we stop the loop before reaching 81 (the next even number after 80).
- `i += 2` increments `i` by 2 in each iteration, ensuring that we only iterate over odd numbers.
*/
console.log ("Example 2")
for (i = 41; i <= 69; i+=2){
    console.log (i);
}
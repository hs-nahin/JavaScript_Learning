// Example 1
// Difference Between Function and Arrays
let user = {
    Name : "Nahin",
    Age : 23,
    Occupation : "Student",
    Gender : "Male",
};

user.RelationalStatus = "Single";
var loveName = user.InterestedPersonName = "Nusrat Jahan Mim";
console.log(user);
console.log (user.Name);
console.log ("I love " + loveName)

// Arrays
let user2 = [
    {
        UserName : "Your Name",
        Password : "Your Password",
    },
    {
        UserName : "Nahin",
        Password : "0011",
    },
];
console.log (user2);
// Example 1
console.log ();
console.log ("Example 1");
console.log ("________________________________");
let person = {
    Name : "Hasnat",
    Age : 21
};
person.Age = 23;

console.log(person.Age);
console.log(person.Name);

// Example 2
console.log();
console.log ("Example 2");
console.log ("________________________________");

var MyInfo = {YourName: "Hasnat", HomeTown: "Dinajpur", PhoneNumber: 1784934660}

console.log(MyInfo);

console.log(MyInfo.PhoneNumber);

function Info(YourName, HomeTown, PhoneNumber){
    this.YourName = YourName;
    this.HomeTown = HomeTown;
    this.PhoneNumber = PhoneNumber;
}

var NewObject = new Info("Nahin", "Dinajpur", 1784934660);
console.log(NewObject);
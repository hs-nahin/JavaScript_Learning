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
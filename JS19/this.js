const user = {
    username: "nahin",
    price: 999,

    welcomeMessage: function () {
        console.log(`Hey, ${this.username} welcome to our website. I hope you are ${this.age}`);
    }
}
user.welcomeMessage();
user.age = 24;
user.welcomeMessage();
console.log(this);
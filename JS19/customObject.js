let myCustomObj = {
    name: 'Hasnat',
    age: 24,
    job: 'student',
    func: function () {
        console.log(this);        
    },
    anotherObj: {
        name: 'Shahriyar',
        msg: function () {
            console.log(`My name is: ${this.name}`);
        },
    },
    newObj:{
        name: 'Nahin',
        value: function () {
            console.log(this);
        } 
    }
}

myCustomObj.func();
myCustomObj.anotherObj.msg();
myCustomObj.newObj.value();
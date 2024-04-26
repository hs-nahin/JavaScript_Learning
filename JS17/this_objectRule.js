let myCustomObj = {
    name: 'Hasnat Shahriyar',
    age: 24,
    job: 'Student',
    anotherObj: {
        name: 'Nahin',
        msg: function () {
            console.log('My Name is ' + this.name);
        }
    }
}

myCustomObj.anotherObj.msg();
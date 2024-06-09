let firstObj = {
    name: 'Hasnat',
    age: 24,
    secondObj: {
        name: 'Nafiya',
        age: 0,
    },
    thirdObj:{
        name: 'Nusrat',
        age: 19,
        print: function () {
            console.log(`Name: ${this.name} and Age: ${this.age}`);
        }
    },
}

firstObj.thirdObj.print.call(firstObj);
firstObj.thirdObj.print();
firstObj.thirdObj.print.call(firstObj.secondObj);
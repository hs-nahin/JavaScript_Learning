function aParentFunc(a) {
    return function bChildFunc(b) {
        console.log('Sum: ' + (a+b));
    }
}

var aParentVar = aParentFunc(6);
var bChildVar = aParentVar(4);
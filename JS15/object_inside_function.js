function aFunc(a) {
    console.log('Before changing the property: ' + a.one);
    a.one = 'two';
    console.log('After changing the property: ' + a.one);
    console.log('Object a of ' + 'two is ' + a.two);
}

let a = {
    one: 'one',
    two: 2,
}

aFunc(a);
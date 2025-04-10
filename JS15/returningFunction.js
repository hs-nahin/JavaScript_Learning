function welcomMsg(name) {
    console.log('Welcome Mr. ' + name);
    return function options(menu){
        console.log('Do you like ' + menu + ' Mr. ' + name + '?');
        return function item(price) {
            console.log('The price of the ' + menu + ' is ' + price + ' taka.');
        }
    }
}

welcomMsg('Hasnat')('Coffee')(20);
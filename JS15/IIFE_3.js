let controller = (function () {
    let a = {
        name:'Hasnat Shahriyar',
        uid: 2105,
    }
    return a;
})();

let interface = (function () {
    return 'Hey, my name is ' + controller.name + ' and my user id is : ' + controller.uid;
})();

console.log(interface);
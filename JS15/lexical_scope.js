function parentFunction() {
    let a = 5;
    function childFunction() {
        let b = 5;
        let c = 5;
        console.log(a+b);
    }
    childFunction();
}

parentFunction();
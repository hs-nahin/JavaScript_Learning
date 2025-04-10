function globalFunc() {
    console.log('This is Global Function');
    function localFunc(lf) {
        console.log(lf);
    }
    localFunc('This is Local Function');
}
globalFunc();
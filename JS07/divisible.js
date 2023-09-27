for (i = 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log ("Foobar");
    }
    else if (i % 3 === 0){ //If the remainder is 0 after dividing it with 3 then it will show Foo
        console.log ("Foo");
    } else if (i % 5 === 0){ //If the remainder is 0 after dividing it with 5 then it will show bar
        console.log ("bar");
    }
    else {
        console.log (i);
    }
}
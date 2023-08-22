for (var b = 1; b <= 20; b++){
    console.log(b);
    if (b > 9){
        break;
    }
}

var roastGiven = 0;
while (roastGiven < 10){
    console.log("Roast Den, Gift Ansi");
    roastGiven++;
    if (roastGiven > 4){
        break;
    }
}

var items = ['Paper', 'Pencil', 'Eraser', 'Pen', 'Book'];
for ( var i = 0; i < items.length; i++){
    var item = items [i];
    if (item == 'Pen'){
        break;
    }
    console.log(item)
}
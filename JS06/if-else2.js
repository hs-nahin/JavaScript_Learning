// AND &&
// Both have to be TRUE to show the "if" value or it will show the "else" value
// Both are TRUE
if (10 > 9 && 10 == 10){
    console.log ("Subscribe"); //If both are True
} else {
    console.log ("Subscribed"); 
}
// One is False, other one is True
if (10 > 15 && 15 == 15){
    console.log ("Subscribe");
} else {
    console.log ("Subscribed"); //If False
}
// One is TRUE, other one is FALSE
if (15000 > 10000 && 15 != 15){
    console.log ("Can Purchase a Phone");
} else {
    console.log ("Cannot Purchase a Phone");
}
// Both are True
if (15000 < 20000 && 15 == 15){
    console.log ("Can Purchase a Phone");
} else {
    console.log ("Cannot Purchase a Phone");
}
// Both are False
if (20 > 25 && 25 == 30){
    console.log ("Both are True");
} else {
    console.log ("Both are False");
}
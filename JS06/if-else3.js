// OR ||
// If both value is "True" or one value is "True" then it will show the TRUE value

// Both are true
if (10 > 9 || 10 == 10){
    console.log ("Both are True");
} else {
    console.log ("Both are False");
}

// One Value is True, other value is FALSE
if (10 > 9 || 10 != 10){
    console.log ("One Value is True, Other Value is False");
} else {
    console.log ("Both are False");
}

// Both are FALSE
if (10 < 9 || 10 == 9){
    console.log ("One value is False, other value is True");
} else {
    console.log ("Both are False");
}
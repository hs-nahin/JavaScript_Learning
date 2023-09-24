const lyrics = "Meghomilone cheye raag korona";

console.log (lyrics.indexOf ("cheye"));
console.log (lyrics.indexOf ("Meghomilone"));

if (lyrics.indexOf("raag") !== -1){
    console.log ("exist inside the string");
} else {
    console.log ("Cannot Find it");
}

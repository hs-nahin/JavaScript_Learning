const lyrics = "Bristy Toh Themeche Onek Agei, Bhijechi Ami Ekai";

const doesExist = lyrics.includes("Bristy");
console.log (doesExist);

const doesNotExist = lyrics.includes ("Shitol");
console.log (doesNotExist);

let searchString = "bristy";
const doesNotMatch = lyrics.includes (searchString);
console.log (doesNotExist);
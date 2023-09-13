function calculateGrade (marks){
    if (marks >= 90){
        return "A+";
    } else if (marks >= 80){
        return "A";
    } else if (marks >= 70){
        return "B";
    } else if (marks >= 60){
        return "C";
    } else if (marks >= 50){
        return "D";
    } else {
        return "F";
    }
}

// Method 1
var marks = 80;
var grade = calculateGrade (80);
console.log (`Grade of English is : ${grade}`);

// Method 2
var grade1 = calculateGrade (44);
console.log (`Grade of Math is : ${grade1}`);
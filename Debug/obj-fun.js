// An object containing personal details and functions
const obj = {
    name: "Hasnat", // Name property
    middleName: "Shahriyar", // Middle name property
    skills: ["React", "JavaScript", "HTML", "Tailwind"], // Array of skills
    age: 23, // Age property
    fullName: function () { // Method to generate full name
        return this.name + " " + this.middleName; // Combines name and middleName
    },
    printSkills: function () { // Method to print skills
        const fullName = this.fullName(); // Getting the full name by calling the fullName method
        this.skills.forEach(function (value) { // Loop through each skill in the skills array
            console.log(`${fullName} has skills in ${value}`); // Outputting the full name and each skill
        });
    }
};

console.log(obj.fullName()); // Calling fullName method and logging the result
obj.printSkills(); // Calling the printSkills method to display each skill along with the full name

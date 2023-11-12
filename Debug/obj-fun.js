const obj = {
    name: "Hasnat",
    middleName: "Shahriyar",
    skills: ["React", "JavaScript", "HTML", "Tailwind"],
    age: 23,
    fullName: function () {
        return this.name + " " + this.middleName;
    },
    printSkills: function () {
        const fullName = this.fullName(); // Getting the full name
        this.skills.forEach(function (value) {
            console.log(`${fullName} has skills in ${value}`); // Updated output
        });
    }
};

console.log(obj.fullName());
obj.printSkills();

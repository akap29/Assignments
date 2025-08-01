let student = {
  name: "Alice",
  age: 20,
  grade: "B",
  subjects: ["Math", "Science"],
  addSubject(subject) {
    this.subjects.push(subject);
  },
  updateGrade(newGrade) {
    this.grade = newGrade;
  },
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grade: ${this.grade}`);
    console.log(`Subjects: ${this.subjects.join(", ")}`);
  }
};
student.addSubject("English");
student.updateGrade("A");
student.displayInfo();
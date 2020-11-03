let grades = [73, 67, 38, 33];
function gradesStudents(grades) {
  let roundedGrades = [];
  grades.forEach(function (grade) {
    if (grade > 37) {
      let howManyFive = Math.floor(grade / 5);
      let roundedGrade = (howManyFive * 5) + 5;
      if ((roundedGrade - grade) < 3) { grade = roundedGrade }
    }
    roundedGrades.push(grade);
  });
  return roundedGrades;
}
console.log(gradesStudents(grades));
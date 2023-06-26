function schoolRegister(arr) {

    let resultArr = [];

    arr.forEach(el => {
        let splitStr = el.split(',');
        let obj = {}

        for (let i = 0; i < splitStr.length; i++) {
            let currentEl = splitStr[i];
            currentEl = currentEl.split(': ');

            if (i === 0) {
                obj.name = currentEl[1];
            } else if (i === 1) {
                obj.grade = Number(currentEl[1]);
            } else {
                if (currentEl[1] >= 3) {
                    obj.score = Number(currentEl[1]);
                    obj.grade += 1;
                    resultArr.push(obj);
                }
            }
        }
    })
    resultArr.sort((a, b) => a.grade - b.grade);

    let startGrade = resultArr[0].grade;
    console.log(`${startGrade} Grade`)

    let studentsList = [];
    let averageScore = 0;

    resultArr.forEach(student => {
        if (student.grade !== startGrade) {
            console.log(`List of students: ${studentsList.join(', ')}`);
            console.log(`Average annual score from last year: ${(averageScore / studentsList.length).toFixed(2)}`);
            console.log('')
            studentsList = [];
            averageScore = 0;

            startGrade = student.grade;
            console.log(`${startGrade} Grade`)
        }
        studentsList.push(student.name);
        averageScore += student.score;
    })
    console.log(`List of students: ${studentsList.join(', ')}`);
    console.log(`Average annual score from last year: ${(averageScore / studentsList.length).toFixed(2)}`);
}

// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ]);

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75', 
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66', 
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83', 
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20', 
    'Student name: John, Grade: 9, Graduated with an average score: 2.90', 
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90', 
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15' ])
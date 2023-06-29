function schoolGrades(arr) {

    let grades = {};
    let gradesCounter = {};

    for (let i = 0; i < arr.length; i++) {
        let currentStudent = arr[i];
        currentStudent = currentStudent.split(' ');
        let studentName = currentStudent.shift();
        let gradesCount = currentStudent.length;
        let gradesSum = 0;

        currentStudent.forEach(grade => {
            gradesSum += Number(grade)
        });

        if (grades.hasOwnProperty(studentName)) {
            grades[studentName] += gradesSum;
            gradesCounter[studentName] += gradesCount;
        } else {
            grades[studentName] = gradesSum;
            gradesCounter[studentName] = gradesCount;
        }
    }

    grades = Object.entries(grades);
    gradesCounter = Object.entries(gradesCounter);
    grades.sort((studentA, studentB) => studentA[0].localeCompare(studentB[0]));
    gradesCounter.sort((studentA, studentB) => studentA[0].localeCompare(studentB[0]));
    gradesCounter = Object.fromEntries(gradesCounter); 

    for (let i = 0; i < grades.length; i++) {
        let currentStudent = grades[i];
        let name = currentStudent[0];
        console.log(`${name}: ${(currentStudent[1] / gradesCounter[name]).toFixed(2)}`)
        
    }
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);

schoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);
function bonusScoringSystem(arr) {
    let studentsCount = Number(arr.shift());
    let lecturesCount = Number(arr.shift());
    let additionalBonus = Number(arr.shift());
    let highestBonus = 0;
    let attendance = 0;

    for (let i = 0; i < arr.length; i++) {
        let curAttendance = Number(arr[i]);
        let curBonus = (curAttendance / lecturesCount) * (5 + additionalBonus);

        if (curBonus > highestBonus) {
            highestBonus = curBonus;
            attendance = curAttendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(highestBonus)}.`);
    console.log(`The student has attended ${attendance} lectures.`);
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]);

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);
function bonusScoringSystem(arr) {

    let studentsCount = Number(arr.shift());
    let lecturesCount = Number(arr.shift());
    let additionalBonus = Number(arr.shift());  
    let result = [];  
    let maxBonus = 0;
    let attendances = 0;
    
    for (let i = 0; i < arr.length; i++) {
        result.push(Number(arr[i])); 
        result[i] = result[i] / lecturesCount * (5 + additionalBonus);
        
        if (result[i] > maxBonus) {
            maxBonus = result[i];
            attendances = arr[i];
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${attendances} lectures.`)
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
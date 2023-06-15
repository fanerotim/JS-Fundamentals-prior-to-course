function softUniReception(arr) {

    let employeeOne = Number(arr.shift());
    let employeeTwo = Number(arr.shift());
    let employeeThree = Number(arr.shift());
    let studentsCount = Number(arr.shift());
    let totalStudentsPerHour = employeeOne + employeeTwo + employeeThree;
    let hoursCounter = 0;

    for (let i = 1; studentsCount > 0; i++) {
        hoursCounter++;
        if (i % 4 === 0) {
            continue;
        } else {
            studentsCount -= totalStudentsPerHour;
        }
    }
    console.log(`Time needed: ${hoursCounter}h.`)
}

softUniReception(['5', '6', '4', '20'])
softUniReception(['1', '2', '3', '45'])
softUniReception(['3', '2', '5', '40'])
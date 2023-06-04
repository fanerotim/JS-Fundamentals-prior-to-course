function softuniReception(arr) {

    let employeeOne = Number(arr.shift());
    let employeeTwo = Number(arr.shift());
    let employeeThree = Number(arr.shift());
    let studentsCount = Number(arr.shift());
    let hoursCounter = 0;
    let totalEficciency = employeeOne + employeeTwo + employeeThree;
    let breakCounter = 0;

    while (studentsCount > 0) {
        breakCounter++;

        if (breakCounter % 4 !== 0) {
            studentsCount = studentsCount - totalEficciency;
            hoursCounter++;
        } else {
            hoursCounter++;
            continue;  
        }
    }
    console.log(`Time needed: ${hoursCounter}h.`)
}

softuniReception(['5','6','4','20']);
softuniReception(['1','2','3','45']);
softuniReception(['3','2','5','40']);
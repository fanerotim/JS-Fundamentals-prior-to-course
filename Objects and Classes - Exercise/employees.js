function employees(arr) {

    let currentLength = 0;

    let employeesObj = {};

    for (let el of arr) {
        currentLength = el.length;
        employeesObj[el] = currentLength;
        console.log(`Name: ${el} -- Personal Number: ${employeesObj[el]}`)
    }
}

employees([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ])
// employees([ 'Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland' ])
function pointsValidation(arr) {

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let x = x2 - x1;
    let y = y2 - y1;

    let result = Math.sqrt(x * x + y * y);

    if (Number.isInteger(Math.sqrt(x1 * x1 + y1 * y1))) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`)
    }

    if (Number.isInteger(Math.sqrt(x2 * x2 + y2 * y2))) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`)
    }
    
    if (Number.isInteger(result)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);
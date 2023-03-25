function integerAndFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let typeOfNum = 0;

    if (Number.isInteger(sum)) {
        typeOfNum = "Integer";
    } else {
        typeOfNum = "Float";
    }
    console.log(`${sum} - ${typeOfNum}`);
}

integerAndFloat(9,
    100,
    1.1)
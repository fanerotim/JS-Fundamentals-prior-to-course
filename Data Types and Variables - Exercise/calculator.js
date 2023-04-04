function calculator(numOne, operator, numTwo) {

    let result = 0;

    if (operator === "+") {
        result = numOne + numTwo;
    } else if (operator === "-") {
        result = numOne - numTwo;
    } else if (operator === "*") {
        result = numOne * numTwo
    } else {
        result = numOne / numTwo;
    }

    console.log(result.toFixed(2));
}

calculator(25.5,
    '-',
    3)
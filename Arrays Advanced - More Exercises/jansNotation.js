function jansNotation(arr) {

    let resultArr = []
    let firstNum = 0;
    let secondNum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];

        if (Number.isInteger(currentEl)) {
            resultArr.push(currentEl);
        } else {
            switch(currentEl) {
                case '+':
                    if (resultArr.length > 1) {
                        secondNum = resultArr.pop();
                        firstNum = resultArr.pop();
                        resultArr.push(firstNum + secondNum);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
                case '-':
                    if (resultArr.length > 1) {
                        secondNum = resultArr.pop();
                        firstNum = resultArr.pop();
                        resultArr.push(firstNum - secondNum);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
                case '*':
                    if (resultArr.length > 1) {
                        secondNum = resultArr.pop();
                        firstNum = resultArr.pop();
                        resultArr.push(firstNum * secondNum);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
                case '/':
                    if (resultArr.length > 1) {
                        secondNum = resultArr.pop();
                        firstNum = resultArr.pop();
                        resultArr.push(firstNum / secondNum);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
            }
        }
    }
    if (resultArr.length === 1) {
        console.log(resultArr.join());
    } else {
        console.log("Error: too many operands!");
    }
}

jansNotation([
    3,
    4,
    '+']);

jansNotation([
    5,
    3,
    4,
    '*',
    '-']);

jansNotation([
    7,
    33,
    8,
    '-']);

jansNotation([15,
    '/']);

jansNotation([
    31,
    2,
    '+',
    11,
    '/']);

jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/'])


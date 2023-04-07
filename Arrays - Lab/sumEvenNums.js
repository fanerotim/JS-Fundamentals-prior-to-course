function sumEvenNums(input) {

    let currentNum = 0;
    let result = 0;

    for (let i = 0; i < input.length; i++) {
        currentNum = Number(input[i]);

        if (currentNum % 2 === 0) {
            result += currentNum;
        }
    }
    console.log(result);
}

sumEvenNums(
    3,
    5,
    7,
    9)
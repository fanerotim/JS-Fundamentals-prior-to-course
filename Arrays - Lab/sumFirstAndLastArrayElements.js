function sumFirstAndLastArray(input) {

    let currentNum = 0;
    let result = 0;

    for (let i = 0; i < input.length; i++) {
        currentNum = input[i];

        if (i === 0) {
            result += currentNum;
        } else if (i === input.length - 1) {
            result += currentNum;
        }
    }
    console.log(result);
}

sumFirstAndLastArray(
    10,
    17,
    22,
    33)
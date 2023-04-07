function evenAndOddSubtraction(input) {

    let currentNum = 0;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < input.length; i++) {
        currentNum = input[i];

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(evenSum - oddSum);
}

evenAndOddSubtraction(
    '2',
    '4',
    '6',
    '8',
    '10')
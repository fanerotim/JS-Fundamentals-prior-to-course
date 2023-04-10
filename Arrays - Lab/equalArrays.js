function equalArrays(arrOne, arrTwo) {

    let arrOneSymbol = 0;
    let arrTwoSymbol = 0;

    let sum = 0;
    let diffIndex = 0;

    let isDifferent = false;

    for (let i = 0; i < arrOne.length; i++) {
        arrOneSymbol = arrOne[i];

        for (let j = i; j < arrTwo.length; j++) {
            arrTwoSymbol = arrTwo[j];

            if (arrOneSymbol === arrTwoSymbol) {
                sum += Number(arrOneSymbol);
                break;
            } else {
                diffIndex = i;
                console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
                return;
            }
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`)
}

equalArrays(
    10,
    20,
    30,
    '-',
    10,
    20,
    30)
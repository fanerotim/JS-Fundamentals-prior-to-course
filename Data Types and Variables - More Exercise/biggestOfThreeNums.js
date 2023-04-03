function biggestOfThreeNums(numOne, numTwo, numThree) {

    let currentElement = 0;
    let biggestNum = Number.MIN_SAFE_INTEGER;


    for (let i = 0; i < arguments.length; i++) {
        currentElement = arguments[i];

        if (currentElement > biggestNum) {
            biggestNum = currentElement;
        }
    }

    console.log(biggestNum);
}

biggestOfThreeNums(43,
    42.2,
    44.1)
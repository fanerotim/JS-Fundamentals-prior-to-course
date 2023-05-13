function smallestNum(numOne, numTwo, numThree) {

    let arr = [numOne, numTwo, numThree];
    let smallestNum = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < smallestNum) {
            smallestNum = arr[i]
        }
    }
    console.log(smallestNum);
}

smallestNum(2, 5, 3);
smallestNum(600, 342, 123);
smallestNum(25, 21, 4);
smallestNum(2, 2, 2);
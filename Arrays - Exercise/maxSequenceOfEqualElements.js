function maxSequenceOfEqualElements(arr) {

    let currentElement = 0;
    let counter = 0;
    let result = '';

    let counterBuff = 0;
    let leftmostBuff = 0;
    let resultBuff = arr[0] + '';
    let isDifferent = false;

    for (let i = 1; i < arr.length; i++) {
        currentElement = arr[i] + '';

        if (currentElement === resultBuff[0]) {
            resultBuff += ` ${currentElement}`;
            counter++;
        } else {
            if (resultBuff.length > 1 && counter >= 1) {
                if (counterBuff === 0 && isDifferent === true) {
                    leftmostBuff = resultBuff;
                }
                counterBuff = resultBuff;
            }
            resultBuff = currentElement.toString();
            isDifferent = true;
        }
    }

    if (counterBuff === 0) {
        console.log(resultBuff);
        return;
    } else {
        if (counterBuff.length === leftmostBuff.length) {
            console.log(leftmostBuff);
            return;
        }
        console.log(counterBuff);
    }  
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
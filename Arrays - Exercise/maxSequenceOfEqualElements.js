function maxSequence(arr) {

    let elementToCompare = arr[0];
    let result = [arr[0]];
    let counter = 0;
    let leftmost = [];
    let secondSequence = [];

    let currentElement = '';
    for (let i = 1; i < arr.length; i++) {
        currentElement = arr[i];

        if (currentElement === elementToCompare) {
            if (result === '') {
                result.push(currentElement);
            } else {
                result.push(currentElement);
            }
            counter++;
        } else {
            if (result.length > 1 && leftmost.length === 0 && counter >= 1) {
                leftmost = result;
            } else if (result.length > 1 && counter >= 1) {
                secondSequence = result;
            }

            elementToCompare = currentElement;
            result = [];
            result.push(elementToCompare);
        }
    }
    
    let leftmostString = '';
    let resultString = '';
    let secondSequenceString = '';

    if (leftmost.length >= result.length && leftmost.length >= secondSequence.length) {
        for (let i = 0; i < leftmost.length; i++) {
            leftmostString += `${leftmost[i]} `
        }
        console.log(leftmostString);
    } else if (result.length > secondSequence.length) {
        for (let j = 0; j < result.length; j++) {
            resultString += `${result[j]} `
        }
        console.log(resultString);
    } else {
        for (let k = 0; k < secondSequence.length; k++) {
            secondSequenceString += `${secondSequence[k]} `
        }
        console.log(secondSequenceString);
    }
}



// maxSequence([2, 1, 1, 2, 2, 2, 2]);
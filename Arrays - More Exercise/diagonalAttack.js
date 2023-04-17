function diagonalAttacks(arr) {

    let arrAsNum = [];
    let currentElement = '';
    let convertedNum = '';
    let counter = 0;
    let arrAsNumTwo = [];

    for (let i = 0; i < arr.length; i++) {
        currentElement = arr[i];
        counter = 0;
        let subCurElement = '';
        for (let j = 0; j < currentElement.length; j++) {
            subCurElement = currentElement[j];
            if (subCurElement !== NaN && subCurElement !== ' ') {
                convertedNum += subCurElement;
                if (j + 1 === currentElement.length) {
                    arrAsNum.push(parseInt(convertedNum));
                    counter++;
                    convertedNum = '';
                }
            } else {
                arrAsNum.push(parseInt(convertedNum));
                counter++;
                convertedNum = '';
            }
        }
    }
    let rightDiagonal = 0;

    for (let i = 0; i < arrAsNum.length; i += counter + 1) {
        rightDiagonal += arrAsNum[i];
    }

    let leftDiagonal = 0;

    for (let k = counter - 1; k < arrAsNum.length - 1; k += counter - 1) {
        leftDiagonal += arrAsNum[k];
    }

    let result = '';

    if (leftDiagonal !== rightDiagonal) {
        for (let z = 0; z < arr.length; z++) {
            result += `${arr[z]}\n`;
        }
    } else {
        let secondCounter = 0;
        let secondSecondCounter = counter + 1;
        let linesCount = 0;

        for (let y = 0; y < arrAsNum.length; y++) {
            linesCount++;
            if (y === secondCounter) {
                arrAsNumTwo[y] = `${arrAsNum[y]}`
            } else {
                arrAsNumTwo[y] = `${rightDiagonal}`
            }

            if (linesCount % counter === 0) {
                secondCounter += secondSecondCounter;
            }
        }
        let thirdCounter = counter - 1;
        let secondThirdCounter = counter - 1;

        for (let u = counter - 1; u <= arrAsNumTwo.length; u++) {
            if (u === thirdCounter) {
                arrAsNumTwo[u] = `${arrAsNum[u]}`
                thirdCounter += secondThirdCounter;
            }
        }
    }

    let lastCounter = counter;
    for (let t = 0; t < arrAsNumTwo.length; t++) {
        if (lastCounter === 0) {
            result += `${'\n'}`
            result += `${arrAsNumTwo[t]} `
            lastCounter = counter;
        } else {
            result += `${arrAsNumTwo[t]} `
        }
        lastCounter--;
    }
    console.log(result);

};

diagonalAttacks([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

diagonalAttacks([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);

diagonalAttacks([
    '1 0 1 1',
    '0 1 1 1',
    '1 1 1 1',
    '1 0 1 1'
]);
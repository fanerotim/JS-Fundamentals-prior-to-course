function arrayModifier(arr) {

    let resultArr = arr.shift().split(' ');
    let index = 0;
    let command = arr[index];

    while (command !== 'end') {

        let currentCommand = command.split(' ');
        let currentAction = currentCommand.shift();
        let firstIndex = currentCommand[0];
        let secondIndex = currentCommand[1];

        switch (currentAction) {
            case "swap":
                let numAtFirstIndex = resultArr[firstIndex]
                resultArr[firstIndex] = resultArr[secondIndex];
                resultArr[secondIndex] = numAtFirstIndex;
                break;
            case "multiply":
                let multipliedElement = Number(resultArr[firstIndex] * Number(resultArr[secondIndex]));
                resultArr[firstIndex] = multipliedElement;
                break;
            case "decrease":
                for (let i = 0; i < resultArr.length; i++) {
                    let currentNum = Number(resultArr[i]);
                    if (currentNum >= 0) {
                        resultArr[i] = Number(resultArr[i])
                        resultArr[i]--;
                    } else if (currentNum < 0) {
                        resultArr[i] = Number(resultArr[i])
                        resultArr[i]--;
                    }
                }
                break;
        }
        index++;
        command = arr[index];
    }
    let resultStr = '';
    for (let i = 0; i < resultArr.length; i++) {
        if (i < resultArr.length - 1) {
            resultStr += `${resultArr[i]}, `
        } else {
            resultStr += `${resultArr[i]}`
        }
    }
    console.log(resultStr);
}

// arrayModifier([
//     '23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end'
// ]);

// arrayModifier([
//     '1 2 3 4',
//     'swap 0 1',
//     'swap 1 2',
//     'swap 2 3',
//     'multiply 1 2',
//     'decrease',
//     'end'
// ])

arrayModifier([
    '0 0 0 0',
    'swap 0 1',
    'swap 1 2',
    'decrease',
    'swap 2 3',
    'multiply 1 2',
    'end'
]);
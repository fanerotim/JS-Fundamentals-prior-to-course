function arrayManipulations(arr) {

    let elementStart = 1;
    let arrayLength = arr.length;

    let result = arr[0].split(' ');

    let add = function (num) {
        result.push(num);
    }

    let remove = function (num) {

        for (el of result) {
            if (el === num) {
                result.splice(result.indexOf(num), 1);
            }
        }
    }

    let removeAt = function (num) {
        result.splice(num, 1)
    }

    for (let i = elementStart; i < arrayLength; i++) {
        let arrayOfCommands = arr[i].split(' ');

        for (let j = 0; j < arrayOfCommands.length - 1; j++) {
            let currentCommand = arrayOfCommands[j];
            let numAfterCommand = arrayOfCommands[j + 1]

            if (currentCommand === 'Add') {
                add(numAfterCommand);
            } else if (currentCommand === 'Remove') {
                remove(numAfterCommand);
            } else if (currentCommand === 'RemoveAt') {
                removeAt(numAfterCommand);
            } else if (currentCommand === 'Insert') {
                const indexToInsertAt = arrayOfCommands[j + 2];

                let insertAt = function (num) {
                    result.splice(indexToInsertAt, 0, num);
                }

                insertAt(numAfterCommand);
            }
        }
    }
    console.log(result.join(' '));
}


arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 1',
    'RemoveAt 1',
    'Insert 8 3']);

// arrayManipulations(['6 12 2 65 6 42',
// 'Add 8',
// 'Remove 12',
// 'RemoveAt 3',
// 'Insert 6 2'])
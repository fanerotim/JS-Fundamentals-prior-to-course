function arrayManipulator(arrInt, arrStr) {

    let result = arrInt.slice(0);
    let finalResult = [];
    let strToPrint = `[ `

    for (let i = 0; i < arrStr.length; i++) {
        let curCommand = arrStr[i].split(' ');
        let action = curCommand.shift();

        switch (action) {
            case 'add':
                result.splice(curCommand[0], 0, Number(curCommand[1]));
                break;
            case 'addMany':
                let index = curCommand.shift();
                for (el of curCommand) {
                    result.splice(index, 0, Number(el))
                    index++;
                }
                break;
            case 'contains':
                let element = Number(curCommand[0]);
                if (result.includes(element)) {
                    console.log(result.indexOf(element));
                } else {
                    console.log(-1);
                }
                break;
            case 'remove':
                let removeAt = curCommand[0];
                if (removeAt !== undefined) {
                    result.splice(removeAt, 1)
                }
                break;
            case 'shift':
                let shiftCount = curCommand[0];
                for (let k = 0; k < shiftCount; k++) {
                    shiftedElement = result.shift();
                    result.push(shiftedElement);
                }
                break;
            case 'sumPairs':
                let sum = 0;
                let counter = 0;
                for (let r = 0; r < result.length; r++) {
                    let currentElement = Number(result[r]);
                    counter++;
                    sum += currentElement;
                    if (counter > 1) {
                        finalResult.push(sum);
                        sum = 0;
                        counter = 0;
                    } else if (r === result.length - 1) {
                        finalResult.push(currentElement);
                    }
                }
                result = finalResult.slice(0);
                finalResult = [];
                break;
            case 'print':
                for (let z = 0; z < result.length; z++) {
                    if (z !== result.length - 1) {
                        strToPrint += `${result[z]}, `
                    } else {
                        strToPrint += `${result[z]} ]`
                    }
                }
                console.log(strToPrint);
                return;
        }
    }
}

// arrayManipulator([1, 2, 4, 5, 6, 7, 6],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']);

// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

// arrayManipulator([2, 2, 4, 2, 4],
//     ["add 1 4", "sumPairs", "print"])

arrayManipulator([1, 3, 0],
    ["sumPairs", "print"])
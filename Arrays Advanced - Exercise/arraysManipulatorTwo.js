function arrayManipulator(arr, commands) {

    let result = arr.slice();
    let element = '';
    let index = '';
    let curCommand = '';
    let finalResult = '['

    for (let i = 0; i < commands.length; i++) {
        curCommand = commands[i].split(' ');
        let action = curCommand.shift();
        index = Number(curCommand.shift());

        switch (action) {
            case "add":
                add(curCommand);
                break;
            case "addMany":
                addMany(curCommand);
                break;
            case "contains":
                contains(curCommand);
                break;
            case "remove":
                remove(curCommand);
                break;
            case "shift":
                shift(curCommand);
                break;
            case "sumPairs":
                sumPairs(curCommand);
                break;
            case "print":
                print(curCommand);
                break;
        }
    }

    function add(command) {
        element = Number(curCommand.shift());
        result.splice(index, 0, element)
    }

    function addMany(command) {
        let elementsToAdd = '';
        for (let e = 0; e < curCommand.length; e++) {
            if (e === curCommand.length - 1) {
                elementsToAdd += `${curCommand[e]}`;
            } else {
                elementsToAdd += `${curCommand[e]} `;
            }
        }
        result.splice(index, 0, elementsToAdd);
        result = result.join(' ');
        result = result.split(' ');
        result = result.map(a => Number(a));
    }

    function contains(command) {
        if (result.includes(index)) {
            console.log(result.indexOf(index));
        } else {
            console.log(-1);
        }
    }

    function remove(command) {
        result.splice(index, 1);
    }

    function shift(command) {
        for (let i = 0; i < index; i++) {
            let shiftedItem = result.shift();
            result.push(shiftedItem);
        }
    }

    function sumPairs(command) {
        let newArr = [];
        let counter = 0;
        let sum = 0;

        for (let i = result.length; result.length > 0; i--) {
            counter++;
            sum += result.shift();
            if (counter === 2) {
                newArr.push(sum);
                counter = 0;
                sum = 0;
            } else if (result.length === 0) {
                newArr.push(sum);
            }
        }
        result = newArr.slice(0);
        newArr = [];
    }

    function print(command) {
        for (let f = 0; f < result.length; f++) {
            if (f === result.length - 1) {
                finalResult += ` ${result[f]} ]`
            } else {
                finalResult += ` ${result[f]},`
            }
        }
    }
    console.log(finalResult);
}

// arrayManipulator([1, 2, 4, 5, 6, 7],
// ['add 1 8', 'contains 1', 'contains 3', 'print']);

// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

arrayManipulator([2, 2, 4, 2, 4],
["add 1 4", "sumPairs", "print"])

arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])
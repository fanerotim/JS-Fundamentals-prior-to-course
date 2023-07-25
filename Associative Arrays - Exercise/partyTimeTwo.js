function solve(arr) {

    let vipList = {};
    let regularList = {};
    
    let command = arr.shift();

    while (command !== 'PARTY') {
        if (command[0].match(/[0-9]/)) {
            if (!vipList.hasOwnProperty(command)) {
                vipList[command] = command;
            } else {
                vipList[`cloned${command}`] = command
            }
        } else {
            if (!regularList.hasOwnProperty(command)) {
                regularList[command] = command;
            } else {
                regularList[`cloned${command}`] = command
            }
            regularList[command] = command;
        }
        command = arr.shift();
    }

    for (let guest of arr) {
        if (vipList.hasOwnProperty(guest)) {
            delete vipList[guest]
        } else if (regularList.hasOwnProperty(guest)) {
            delete regularList[guest]
        }
    }

    let vipLength = Object.entries(vipList).length;
    let regularLength = Object.entries(regularList).length;
    let totalLength = vipLength + regularLength;

    console.log(totalLength);

    for (let key in vipList) {
        console.log(vipList[key]);
    }

    for (let key2 in regularList) {
        console.log(regularList[key2]);
    }
   
}

solve([
    '7IK9Yo0h',
    '9NoBUajQ',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

// solve([
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
//     ])
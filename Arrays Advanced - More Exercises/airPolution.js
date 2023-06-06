function airPolution(pollutionMap, commands) {

    let mapArr = [];
    for (el of pollutionMap) {
        mapArr.push(el.split(' '));
    }

    for (let i = 0; i < commands.length; i++) {
        let curCommand = commands[i].split(' ');
        let command = curCommand.shift();
        let index = curCommand.shift();

        switch (command) {
            case "breeze":
                for (let b = 0; b < mapArr[index].length; b++) {
                    mapArr[index][b] -= 15;
                    if (mapArr[index][b] < 0) {
                        mapArr[index][b] = 0;
                    }
                }
                break;
            case "gale":
                for (let g = 0; g < mapArr.length; g++) {
                    mapArr[g][index] -= 20;
                    if (mapArr[g][index] < 0) {
                        mapArr[g][index] = 0;
                    }
                }
                break;
            case "smog":
                for (let s = 0; s < mapArr.length; s++) {
                    for (let c = 0; c < mapArr.length; c++) {
                        mapArr[s][c] = Number(mapArr[s][c]) + Number(index);
                        //need to convert all strings in the mapArr to nums
                    }
                }
                break;
        }
    }

    let result = '';
    let isPoluted = true;
    let polutionCounter = 0;
    for (let row = 0; row < mapArr.length; row++) {
        for (let col = 0; col < mapArr.length; col++) {
            if (mapArr[row][col] >= 50) {
                polutionCounter++;
                if (polutionCounter === 1) {
                    result += `[${row}-${col}]`
                } else {
                    result += `, [${row}-${col}]`
                }
                
            }
        }
    }
    if (polutionCounter === 0) {
        isPoluted = false;
    }

    if (!isPoluted) {
        console.log("No polluted areas")
    } else {
        console.log(`Polluted areas: ${result}`);
    }
}

airPolution([
    '5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25'])

airPolution([
    '5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);

airPolution([
    '5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35'])
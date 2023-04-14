function ladybugs(arr) {

    let fieldCount = arr[0];
    let ladybugsField = [];
    let isNegative = false;

    for (let i = 0; i < fieldCount; i++) {
        ladybugsField.push(0);

        if (arr.length > 102) {
            break;
        }

        if (ladybugsField.length > 1000) {
            break;
        }
    }

    let ladybugsPosition = arr[1].split(" ");

    for (let i = 0; i < ladybugsPosition.length; i++) {
        let currentLadyBug = ladybugsPosition[i];

        if (currentLadyBug === "-") {
            i += 2;
            continue;
        }

        currentLadyBug = Number(currentLadyBug);

        if (currentLadyBug !== " ") {
            if (currentLadyBug < ladybugsField.length) {
                ladybugsField[Number(currentLadyBug)] = 1;
            }
        }
    }

    let currentAction = '';
    for (let k = 2; k < arr.length; k++) {
        currentAction = arr[k];

        let currentElement = '';
        let index = '';
        let moveNum = '';
        let command = '';
        let counter = 0;

        for (let a = 0; a < currentAction.length; a++) {
            currentElement = currentAction[a];

            if (currentElement !== " " && counter === 0) {
                index += currentElement;
            } else if (currentElement === " ") {
                counter++;
                continue;
            }

            if (counter === 1) {
                command += currentElement;
            } else if (counter === 2) {
                if (currentElement === "-") {
                    moveNum += currentElement;
                    continue;
                }
                moveNum += currentElement;
            }
        }

        index = Number(index);
        moveNum = Number(moveNum);

        let intervalStart = -2147483647;
        let intervalEnd = 2147483647;

        if (index < intervalStart) {
            break;
        } else if (index > intervalEnd) {
            break;
        }

        if (moveNum < intervalStart) {
            break;
        } else if (moveNum > intervalEnd) {
            break;
        }

        if (index >= ladybugsField.length || index < 0) {
            continue;
        }

        if (moveNum === 0) {
            continue;
        }

        if (arr[index] === 0) {
            continue;
        }

        let numberOfMoves = index + moveNum;

        if (command === "right") {
            if (ladybugsField[numberOfMoves] === 0 && ladybugsField[index] !== 0) {
                ladybugsField[numberOfMoves] = 1;
            } else if (ladybugsField[numberOfMoves] === 1) {
                if (ladybugsField[numberOfMoves] <= ladybugsField.length) {
                    while (ladybugsField[numberOfMoves] <= ladybugsField.length) {
                        numberOfMoves += numberOfMoves;

                        if (ladybugsField[index] === 0) {
                            continue;
                        }

                        if (ladybugsField[numberOfMoves] === 0) {
                            ladybugsField[numberOfMoves] = 1;
                            break;
                        } else {
                            continue;
                        }
                    }

                    if (ladybugsField[numberOfMoves] > ladybugsField.length) {
                        ladybugsField[index] = 0;
                    }
                }
                ladybugsField[index] = 0;
            }
            ladybugsField[index] = 0;
        } else if (command === "left") {
            let numerOfNegativeMoves = index - moveNum;
            if (ladybugsField[numerOfNegativeMoves] === 0 && ladybugsField[index] !== 0) {
                ladybugsField[numerOfNegativeMoves] = 1;
            } else if (ladybugsField[numerOfNegativeMoves] === 1) {
                if (ladybugsField[numerOfNegativeMoves] <= ladybugsField.length) {
                    while (ladybugsField[numerOfNegativeMoves] <= ladybugsField.length) {

                        if (numerOfNegativeMoves === 0) {
                            ladybugsField[index] === 0;
                            break;
                        }
                        numerOfNegativeMoves -= numerOfNegativeMoves;

                        if (ladybugsField[index] === 0) {
                            continue;
                        }

                        if (ladybugsField[moveNum] < 0 || ladybugsField[moveNum] > ladybugsField.length) {
                            continue;
                        }

                        if (ladybugsField[numerOfNegativeMoves] === 0) {
                            ladybugsField[numerOfNegativeMoves] = 1;
                            break;
                        } else {
                            continue;
                        }
                    }

                    if (ladybugsField[numerOfNegativeMoves] > ladybugsField.length) {
                        ladybugsField[index] = 0;
                    }
                }
                ladybugsField[index] = 0;
            }
            ladybugsField[index] = 0;
        }
    }
    console.log(ladybugsField.join(" "));
}

ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]);
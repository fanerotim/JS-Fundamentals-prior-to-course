function memoryGame(arr) {

    let sequence = arr.shift().split(' ');

    let index = 0;
    let command = arr[index];
    let numberOfMovesCounter = 0;
    let addTwoElements = 2;

    while (command !== 'end') {
        let indexArr = command.split(' ');
        let firstIndex = indexArr.shift();
        let secondIndex = indexArr.shift();
        isInvalid = false;
        numberOfMovesCounter++;

        let halfArrLength = (sequence.length / 2);

        let outOfBoundsOne = firstIndex < 0;
        let outOfBoundsTwo = firstIndex > sequence.length - 1;
        let outOfBoundsThree = secondIndex < 0;
        let outOfBoundsFour = secondIndex > sequence.length - 1;

        if (firstIndex === secondIndex
            || outOfBoundsOne || outOfBoundsTwo
            || outOfBoundsThree || outOfBoundsFour) {

            for (let i = 0; i < addTwoElements; i++) {
                let elementToAdd = `-${numberOfMovesCounter}a`
                sequence.splice(halfArrLength, 0, elementToAdd)

                if (i === 1) {
                    console.log("Invalid input! Adding additional elements to the board");
                    isInvalid = true;
                    break;
                }
            }
        }

        if (isInvalid === true) {
            index++;
            command = arr[index];
            continue;
        }

        let elementAtFirstIndex = sequence[firstIndex];
        let elementAtSecondIndex = sequence[secondIndex];

        if (elementAtFirstIndex === elementAtSecondIndex) {
            sequence.splice(sequence.indexOf(elementAtFirstIndex), 1);
            sequence.splice(sequence.indexOf(elementAtSecondIndex), 1);
            console.log(`Congrats! You have found matching elements - ${elementAtFirstIndex}!`)
        } else if (elementAtFirstIndex !== elementAtSecondIndex) {
            console.log("Try again!")
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${numberOfMovesCounter} turns!`);
            return;
        }
        index++;
        command = arr[index];
    }
    console.log("Sorry you lose :(");
    console.log(sequence.join(' '));
}

// memoryGame([
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
// ]);

// memoryGame([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]);

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);
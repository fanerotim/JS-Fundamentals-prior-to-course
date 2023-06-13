function memoryGame(arr) {

    let sequence = arr.shift().split(' ');
    let index = 0;
    let command = arr[index];
    let movesCounter = 0;

    while (command !== 'end') {
        command = command.split(' ');
        movesCounter++;
        let firstIndex = Number(command.shift());
        let secondIndex = Number(command.shift());

        if (firstIndex === secondIndex || 
            firstIndex < 0 || 
            secondIndex > sequence.length - 1 || 
            firstIndex > sequence.length - 1 || 
            secondIndex < 0) {
            console.log("Invalid input! Adding additional elements to the board");
            let middleOfSequence = sequence.length / 2;
            for (let i = 0; i < 2; i++) {
                sequence.splice(middleOfSequence, 0, `-${movesCounter}a`)
            }
            index++;
            command = arr[index];
            continue;
        }

        if (sequence[firstIndex] === sequence[secondIndex]) {
            let foundElement = sequence.splice(firstIndex, 1);
            if (secondIndex === 0) {
                sequence.splice(secondIndex, 1);
            } else {
                sequence.splice(secondIndex - 1, 1);
            }
            console.log(`Congrats! You have found matching elements - ${foundElement.join(' ')}!`)
        } else {
            console.log("Try again!")
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${movesCounter} turns!`);
            return;
        }
        index++;
        command = arr[index];
    }

    if (sequence.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(sequence.join(' '));
    }
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
//     "end"]);

// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"]);

memoryGame([
    "0 0",
    '0 1',
    '0 1',
    'end'
]);
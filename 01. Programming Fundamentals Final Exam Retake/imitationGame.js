function imitationGame(arr) {

    let message = arr.shift();

    let index = 0;
    let command = arr[index];

    while (command !== 'Decode') {
        let currentCommand = command.split('|');
        let substring = '';
        let operation = currentCommand.shift();

        switch (operation) {
            case 'Move':
                let numberOfMoves = Number(currentCommand.shift());
                substring = message.slice(0, numberOfMoves);
                let remainingLetters = message.slice(numberOfMoves);
                message = remainingLetters.concat(substring);
                break;
            case 'Insert':
                let index = Number(currentCommand.shift());
                let value = currentCommand.shift();
                message = message.split('')
                message.splice(index, 0, value);
                message = message.join('');
                break;
            case 'ChangeAll':
                substring = currentCommand.shift();
                let replacement = currentCommand.shift();
                message = message.split('');

                for (let i = 0; i < message.length; i++) {
                    let letter = message[i];

                    if (letter === substring) {
                        message[i] = replacement;
                    }
                }
                message = message.join('');
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(`The decrypted message is: ${message}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]);
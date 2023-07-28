function solve(arr) {

    let message = arr.shift();
    let command = arr.shift();

    while (command !== 'Decode') {
        command = command.split('|');
        let action = command.shift();

        switch (action) {
            case 'Move':
                let lettersCount = Number(command.shift());
                let lettersToMove = message.substring(0, lettersCount);
                message = message.replace(lettersToMove, '');
                message = message.concat(lettersToMove);
                break;
            case 'Insert':
                let index = Number(command.shift());
                let value = command.shift();
                let initialString = message.substring(0, index);
                message = message.replace(initialString, '');
                message = initialString + value + message;
                break;
            case 'ChangeAll':
                let subString = command.shift();
                let replacement = command.shift();

                while (message.includes(subString)) {
                    message = message.replace(subString, replacement);
                }
                break;
        }
        command = arr.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',

]);
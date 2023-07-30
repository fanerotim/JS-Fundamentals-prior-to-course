function stringManipulator(arr) {

    let message = arr.shift();
    
    let command = arr.shift();

    while (command !== 'End') {
        command = command.split(' ');
        let action = command.shift();
        let subString;
        let char;

        switch(action) {
            case 'Translate':
                char = command.shift();
                let replacement = command.shift();
                if (message.includes(char)) {
                    while (message.includes(char)) {
                        message = message.replace(char, replacement);
                    }
                }
                console.log(message);
                break;
            case 'Includes':
                subString = command.shift();
                if (message.includes(subString)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Start':
                subString = command.shift();
                if (message.startsWith(subString)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                message = message.toLowerCase();
                console.log(message);
                break;
            case 'FindIndex':
                char = command.shift();
                let indexToPrint = message.lastIndexOf(char);
                console.log(indexToPrint);
                break;
            case 'Remove':
                let startIndex = Number(command.shift());
                let count = Number(command.shift());
                let stringToRemove = message.substring(startIndex, startIndex + count);
                message = message.replace(stringToRemove, '');
                console.log(message);
                break;
        }
        command = arr.shift();
    }
}

// stringManipulator(["//Thi5 I5 MY 5trING!//", "Translate 5 s", "Includes string", "Start //This", "Lowercase", "FindIndex i", "Remove 0 10", "End"]);
stringManipulator(["*S0ftUni is the B3St Plac3**","Translate 2 o","Includes best","Start the","Lowercase","FindIndex p","Remove 2 7","End"])
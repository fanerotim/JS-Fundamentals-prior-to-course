function solve(arr) {

    let message = arr.shift();
    let command = arr.shift();

    while (command !== 'Reveal') {
        command = command.split(':|:');
        let action = command.shift();
        let subString;

        switch(action) {
            case 'InsertSpace':
                let index = Number(command.shift());
                let beginning = message.substring(0, index);
                message = message.replace(beginning, '');
                message = beginning + ' ' + message;
                console.log(message);
                break;
            case 'Reverse':
                subString = command.shift();

                if (message.includes(subString)) {
                    message = message.replace(subString, '');
                    subString = subString.split('').reverse().join('');
                    message += subString;
                } else {
                    console.log('error');
                    break;
                }
                console.log(message);
                break;
            case 'ChangeAll':
                subString = command.shift();
                let replacement = command.shift();

                while (message.includes(subString)) {
                    message = message.replace(subString, replacement);
                }
                console.log(message);
                break;
        }
        command = arr.shift();
    }
    console.log(`You have a new text message: ${message}`)
}

// solve([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ]);

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);
function secretChat(arr) {

    let message = arr.shift();
    let index = 0;
    let command = arr[index];

    while (command !== 'Reveal') {
        command = command.split(':|:');
        let action = command.shift();

        switch (action) {
            case 'InsertSpace':
                let curIndex = Number(command.shift());
                message = message.split('');
                message.splice(curIndex, 0, ' ');
                message = message.join('');
                console.log(message);
                break;
            case 'Reverse':
                let subString = command.shift();
                if (message.includes(subString)) {
                    message = message.replace(subString, '');
                    subString = subString.split('').reverse().join('');
                    message = message.concat(subString);
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                let strToFind = command.shift();
                let replacement = command.shift();

                while (message.includes(strToFind)) {
                    message = message.replace(strToFind, replacement);
                }
                console.log(message);
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(`You have a new text message: ${message}`)
}

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ]);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
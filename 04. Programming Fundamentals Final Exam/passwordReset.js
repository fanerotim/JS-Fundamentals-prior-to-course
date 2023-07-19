function passwordReset(arr) {
    
    let password = arr.shift();

    let index = 0;
    let command = arr[index];
    let rawPassword = '';

    while (command !== 'Done') {
        command = command.split(' ');
        let action = command.shift();

        switch(action) {
            case 'TakeOdd':
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        let currentLetter = password[i];
                        rawPassword += currentLetter;
                    }
                }
                password = rawPassword;
                console.log(password);
                break;
            case 'Cut':
                let index = Number(command.shift());
                let length = Number(command.shift());
                password = password.split('');
                let removedPassword = password.splice(index, length);
                password = password.join('');
                console.log(password);
                break;
            case 'Substitute':
                let subString = command.shift();
                let substitute = command.shift();

                if (password.includes(subString)) {
                    while (password.includes(subString)) {
                        password = password.replace(subString, substitute)
                    }
                    console.log(password);
                } else {
                    console.log("Nothing to replace!")
                }
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(`Your password is: ${password}`)
}

passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);

// passwordReset([
//     "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"]);

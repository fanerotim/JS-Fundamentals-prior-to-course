function solve(arr) {

    let password = arr.shift();

    let command = arr.shift();

    while (command !== 'Done') {
        command = command.split(' ');
        let action = command.shift();
        let subString;

        switch(action) {
            case 'TakeOdd':
                let rawPassword = '';
                for (let i = 0; i < password.length; i++) {
                    let currentLetter = password[i];

                    if (i % 2 !== 0) {
                        rawPassword += currentLetter;
                    }
                }
                password = rawPassword;
                console.log(password);
                break;
            case 'Cut':
                let index = Number(command.shift());
                let length = Number(command.shift());
                subString = password.substring(index, index + length);
                password = password.replace(subString, '');
                console.log(password);
                break;
            case 'Substitute':
                subString = command.shift();
                let substitude = command.shift();

                if (password.includes(subString)) {
                    while (password.includes(subString)) {
                        password = password.replace(subString, substitude);
                    }
                    console.log(password);
                    break;
                } 
                console.log("Nothing to replace!")
                break;
        }
        command = arr.shift();
    }
    console.log(`Your password is: ${password}`);
}

// solve([
//     "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"]);

solve([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);


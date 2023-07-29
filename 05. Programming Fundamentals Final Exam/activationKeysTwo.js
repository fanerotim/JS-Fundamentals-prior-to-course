function solve(arr) {

    let password = arr.shift();
    let command = arr.shift();

    while (command !== 'Generate') {
        command = command.split('>>>');
        let action = command.shift();
        let startIndex;
        let endIndex

        switch (action) {
            case 'Contains':
                let subString = command.shift();
                if (password.includes(subString)) {
                    console.log(`${password} contains ${subString}`);
                } else {
                    console.log("Substring not found!")
                }
                break;
            case 'Flip':
                let secondCommand = command.shift();
                startIndex = Number(command.shift());
                endIndex = Number(command.shift());
                let textToFlip = password.slice(startIndex, endIndex);
                let modifiedText;

                switch(secondCommand) {
                    case 'Lower':
                        modifiedText = textToFlip.toLowerCase();
                        break;
                    case 'Upper':
                        modifiedText = textToFlip.toUpperCase();
                        break;
                }
                password = password.replace(textToFlip, modifiedText);
                console.log(password);
                break;
            case 'Slice':
                startIndex = Number(command.shift());
                endIndex = Number(command.shift());
                let stringToDelete = password.slice(startIndex, endIndex);
                password = password.replace(stringToDelete, '');
                console.log(password);
                break;
        }
        command = arr.shift();
    }
    console.log(`Your activation key is: ${password}`);
}

// solve([
//     "abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"]);

solve([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])


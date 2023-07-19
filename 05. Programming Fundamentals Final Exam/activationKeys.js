function activationKeys(arr) {

    let rawKey = arr.shift();

    let index = 0;
    let command = arr[index];

    while (command !== 'Generate') {
        command = command.split('>>>');
        let action = command.shift();
        let startIndex;
        let endIndex;

        switch (action) {
            case 'Contains':
                let subString = command.shift();

                if (rawKey.includes(subString)) {
                    console.log(`${rawKey} contains ${subString}`);
                } else {
                    console.log("Substring not found!")
                }
                break;
            case 'Flip':
                let secondCommand = command.shift();
                startIndex = Number(command.shift());
                endIndex = Number(command.shift());

                if (secondCommand === 'Upper') {
                    rawKey = rawKey.split('');
                    for (let i = startIndex; i < endIndex; i++) {
                        rawKey[i] = rawKey[i].toUpperCase();
                    }
                    rawKey = rawKey.join('');
                } else {
                    rawKey = rawKey.split('');
                    for (let i = startIndex; i < endIndex; i++) {
                        rawKey[i] = rawKey[i].toLowerCase();
                    }
                    rawKey = rawKey.join('');
                }
                console.log(rawKey);
                break;
            case 'Slice':
                startIndex = Number(command.shift());
                endIndex = Number(command.shift());

                for (let i = startIndex; i < endIndex; i++) {
                    rawKey = rawKey.replace(rawKey[startIndex], '');
                }
                console.log(rawKey);
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(`Your activation key is: ${rawKey}`)
}

// activationKeys([
//     "abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"]);

activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);


function treasureFinder(arr) {
    
    let key = arr.shift().split(' ');
    
    let index = 0;
    let command = arr[index];

    while (command !== 'find') {

        command = command.split('');
        let keyCounter = 0;

        for (let i = 0; i < command.length; i++) {
            
            if (keyCounter === key.length) {
                keyCounter = 0;
            }

            let letter = command[i];
            let currentKey = Number(key[keyCounter]);
            let updatedCharCode = letter.charCodeAt() - currentKey;
            keyCounter++;

            command[i] = String.fromCharCode(updatedCharCode);
        }
        let decryptedText = command.slice(0).join('');

        let counter = 0;
        let treasureType = '';
        let coordinates = '';
        let coordinatesStart = 0;

        for (let letter of decryptedText) {
            if (letter === '&') {
                counter++;
                continue;
            } else if (letter === '<') {
                coordinatesStart++;
                continue;
            } else if (letter === '>') {
                break;
            }

            if (counter > 0 && counter < 2) {
                treasureType += letter;
            } else if (coordinatesStart > 0) {
                coordinates += letter;
            }


        }
        
        console.log(`Found ${treasureType} at ${coordinates}`);

        index++;
        command = arr[index];
    }
    
}

treasureFinder([
    "1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]);

treasureFinder([
    "1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]);
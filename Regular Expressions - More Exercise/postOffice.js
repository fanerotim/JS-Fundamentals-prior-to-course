function postOffice(input) {

    let [firstPart, secondPart, thirdPart] = input[0].split('|');
    let letterRegex = /(#|\$|%|\*|&)(?<letters>[A-Z]+)\1/g;
    let asciiRegex = /[0-9]{2}:[0-9]{2}/g;

    let capitalLetters = firstPart.match(letterRegex);
    capitalLetters = capitalLetters.join('').slice(1, -1);
    capitalLetters = capitalLetters.split('');
    
    let asciiCodes = secondPart.match(asciiRegex);
    let filteredAsciiCodes = new Set();

    asciiCodes.forEach(el => {
        let curAscii = el.slice(0, 2);
        let curLetter = String.fromCharCode(curAscii);
        
        if (capitalLetters.includes(curLetter)) {
            filteredAsciiCodes.add(el);
        }
    })

    let lettersAndLengthsObj = {};

    for (let item of filteredAsciiCodes) {
        let letter = item.slice(0, 2);
        letter = String.fromCharCode(letter);
        let length = item.slice(3);

        if (length[0] == 0) {
            length = length[1];
        }
        lettersAndLengthsObj[letter] = Number(length);
    }
    // filteredAsciiCodes = [... filteredAsciiCodes];
    thirdPart = thirdPart.split(' ');
    
    for (let curLetter of capitalLetters) {
        for (let curWord of thirdPart) {
            if (curLetter === curWord[0]) {
                if (curWord.length - 1 === lettersAndLengthsObj[curLetter]) {
                    console.log(curWord);
                }
            }
        }
    }
}

postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos');
// postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig')
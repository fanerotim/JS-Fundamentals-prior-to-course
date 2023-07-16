function starEnigma(arr) {

    let messageCount = Number(arr.shift());
    let specialLetters = ['s', 't', 'a', 'r'];
    let pattern = /(\w*[^@\-!:>])*@(?<planet>[A-Z]*[a-z]*)(\w*[^@\-!:>])*:(?<population>\d+)(\w*[^@\-!:>])*!(?<attack>[A|D])!(\w*[^@\-!:>])*->(?<soldier>\d+)(\w*[^@\-!:>])*/;

    let attack = [];
    let defence = [];

    for (let i = 0; i < messageCount; i++) {
        let item = arr[i];
        let counter = 0;
        let currentDecryptedMessage = [];
        for (let letter of item) {
            if (specialLetters.includes(letter.toLowerCase())) {
                counter++;
            }
        }
        
        for (let curLetter of item) {
            let newLetter = curLetter.charCodeAt() - counter;
            currentDecryptedMessage.push(String.fromCharCode(newLetter));
        }
        
        let decryptedMessage = currentDecryptedMessage.join('');
        let decrypted = pattern.exec(decryptedMessage);
        
        if (decrypted) {
            let planetName = decrypted.groups['planet'];
            if (decrypted.groups['attack'] === 'A') {
                attack.push(planetName);
            } else {
                defence.push(planetName);
            }
        }
    }

    attack = attack.sort((a, b) => a.localeCompare(b));
    defence = defence.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attack.length}`);
    attack.forEach(el => console.log(`-> ${el}`));
    console.log(`Destroyed planets: ${defence.length}`);
    defence.forEach(el => console.log(`-> ${el}`));
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
// starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);
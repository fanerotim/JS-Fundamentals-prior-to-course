function santaHelper(input) {
    
    let text = input;
    let key = Number(text.shift());
    
    let decodedWords = [];
    let pattern = /(?<name>@[A-Za-z]+)(.[^@\-!:>]+)(?<behavior>![G|N]!)/g;
    let el = text.shift();

    while (el !== 'end') {
        let currentAsciiLetter = '';
        for (let letter of el) {
            let currentAcsiiNum = letter.charCodeAt() - key;
            currentAsciiLetter += String.fromCharCode(currentAcsiiNum);
        }
        decodedWords.push(currentAsciiLetter);
        el = text.shift();
    }
    
    for (let word of decodedWords) {
        let match = pattern.exec(word)
        if (word.match(pattern)) {
            if (match.groups['behavior'] === '!G!') {
                let name = match.groups['name'].slice(1);
                console.log(name);
            }
        }
    }
}

santaHelper([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'])

santaHelper(['3',
'N}eideidmk$(mnyenmCNlpamnin$J$',
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end'])
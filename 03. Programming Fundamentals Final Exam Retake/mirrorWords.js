function mirrorWords(arr) {
    
    let pattern = /([@|#])(?<word>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    
    let text = arr.shift();
    let match = pattern.exec(text);
    let pairs = [];

    while (match) {
        let word = match.groups['word'];
        let wordTwo = match.groups['wordTwo'];
        pairs.push(word);
        pairs.push(wordTwo);
        match = pattern.exec(text);
    }

    let finalString = [];
    
    for (let i = 0; i < pairs.length; i++) {
        let curWord = pairs[i];

        for (let j = i + 1; j < pairs.length; j++) {
            let nextWord = pairs[j]
            let reversedWord = nextWord.split('').reverse().join('');

            if (curWord === reversedWord) {
                finalString.push(`${curWord} <=> ${nextWord}`);
            }
        }
    }

    if (pairs.length < 2) {
        console.log("No word pairs found!");
    } else {
        console.log(`${pairs.length / 2} word pairs found!`)
    }

    if (finalString.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        let strToPrint = '';
        finalString.forEach(el => strToPrint += `${el}, `);
        console.log(strToPrint.slice(0, -2));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]);

mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);

mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])
function solve(arr) {

    let pattern = /([@]|[#])(?<word>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let pairs = [];
    let mirrorWords = [];

    let match = pattern.exec(arr);

    while(match) {
        let first = match.groups['word'];
        let second = match.groups['secondWord'];
        pairs.push(first, second);

        let reversedSecond = second.split('').reverse().join('');

        if (first === reversedSecond) {
            mirrorWords.push(first, second);
        }
        match = pattern.exec(arr);
    }

    if (pairs.length > 0) {
        console.log(`${pairs.length / 2} word pairs found!`);
    } else {
        console.log("No word pairs found!");
    }

    if (mirrorWords.length > 0) {
        console.log("The mirror words are:");
        let counter = 0;
        let output = '';
        for (let i = 0; i < mirrorWords.length; i++) {
            let currentWord = mirrorWords[i];
            counter++;
            if (counter % 2 === 0) {
                output += `${currentWord}, `
            } else {
                output += `${currentWord} <=> `
            }   
        }
        console.log(output.slice(0, output.length - 2));
    } else {
        console.log("No mirror words!");
    }
}

// solve([
//     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
// ]);

// solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])
function replaceChars(input) {

    let stringToPrint = '';

    for (let i = 0; i < input.length; i++) {
        let currentLetter = input[i];

        if (currentLetter !== stringToPrint[stringToPrint.length - 1]) {
            stringToPrint += currentLetter;
        }
    }
    console.log(stringToPrint);
}

replaceChars('aaaaabbbbbcdddeeeedssaa');
replaceChars('qqqwerqwecccwd');
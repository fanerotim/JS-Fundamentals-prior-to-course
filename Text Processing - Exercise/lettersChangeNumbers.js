function lettersChange(input) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let words = input.split(' ');
    let totalSum = 0;

    for (let word of words) {

        if (word !== '') {

            let number = '';
            let firstLetter;
            let lastLetter;
            for (let letter of word) {

                if (isNaN(letter)) {
                    if (firstLetter !== undefined) {
                        lastLetter = letter;
                        break;
                    }
                    firstLetter = letter;
                } else {
                    number += letter;
                }
            }
            number = Number(number);
            let firstLetterPosition = 0;
            let lastLetterPosition = 0;

            for (let i = 0; i < alphabet.length; i++) {
                let curAlphabetLetter = alphabet[i];

                if (firstLetterPosition !== 0 && lastLetterPosition !== 0) {
                    break;
                }

                let firstLetterInLowerCase = firstLetter.toLowerCase();

                if (curAlphabetLetter === firstLetterInLowerCase) {
                    firstLetterPosition = alphabet.indexOf(curAlphabetLetter) + 1;
                }

                let lastLetterInLowerCase = lastLetter.toLowerCase();

                if (curAlphabetLetter === lastLetterInLowerCase) {
                    lastLetterPosition = alphabet.indexOf(curAlphabetLetter) + 1;
                }
            }

            if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
                totalSum += number / firstLetterPosition;
            } else {
                totalSum += number * firstLetterPosition;
            }

            if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {
                totalSum -= lastLetterPosition;
            } else {
                totalSum += lastLetterPosition;
            }
        }
    }
    console.log(totalSum.toFixed(2));
}

// lettersChange('A12b s17G');
// lettersChange('P34562Z q2576f     H456z');
// lettersChange('a1A');
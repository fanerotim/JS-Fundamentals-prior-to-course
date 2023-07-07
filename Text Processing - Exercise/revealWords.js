function revealWords(missingWord, sentence) {

    let missingWordArr = missingWord.split(', ');
    let sentenceAsArr = sentence.split(' ');


    for (let word of missingWordArr) {
        let wordLength = word.length;

        for (let curWord of sentenceAsArr) {

            if (curWord.startsWith('*')) {
                if (curWord.length === wordLength) {
                    let wordIndex = sentenceAsArr.indexOf(curWord);
                    sentenceAsArr[wordIndex] = word;
                }
            }
        }
    }
    sentenceAsArr = sentenceAsArr.join(' ');
    console.log(sentenceAsArr);
}

revealWords(
    'great', 
    'softuni is ***** place for learning new programming languages');

revealWords(
    'great, learning', 
    'softuni is ***** place for ******** new programming languages')
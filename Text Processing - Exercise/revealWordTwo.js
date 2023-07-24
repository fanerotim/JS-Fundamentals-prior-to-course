function solve(word, text) {

    let words = word.split(', ');
    let textArr = text.split(' ');
    
    for (let i = 0; i < textArr.length; i++) {
        let curWord = textArr[i];
        if (curWord.includes('*')) {
            let wordLength = curWord.length;

            for (let currentWord of words) {
                if (currentWord.length === wordLength) {
                    textArr[i] = currentWord;
                }
            }
        }
    }
    console.log(textArr.join(' '));
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');
function modernTimes(sentence) {

    let splittedSentence = sentence.split(' ');
    
    for (let word of splittedSentence) {
        if (word.startsWith('#')) {
            let foundWord = word;
            foundWord = foundWord.substring(1);
            
            if (foundWord.length > 0) {
                let regex = /^[A-Za-z\s]*$/;

                if (foundWord.match(regex)) {
                    console.log(foundWord);
                }
            }
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
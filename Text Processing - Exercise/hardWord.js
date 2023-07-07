function hardWord(text) {

    let splittedText = text[0].split(' ');

    for (let word of splittedText) {
        if (word.startsWith('_')) {

            for (let missing of text[1]) {
                if (word.length === missing.length) {
                    let wordIndex = splittedText.indexOf(word);
                    splittedText[wordIndex] = missing;
                } else if (word[word.length - 1] !== '_') {
                    if (word.length - 1 === missing.length) {
                        let additionalChar = word[word.length - 1];
                        wordIndex = splittedText.indexOf(word);
                        splittedText[wordIndex] = missing + additionalChar;
                    }
                }
            }
        }
    }
    console.log(splittedText.join(' '));
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);


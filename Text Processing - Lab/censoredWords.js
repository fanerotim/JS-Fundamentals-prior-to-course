function censoredWords(sentence, word) {

    let wordIndex = sentence.indexOf(word);
    let wordLength = word.length;

    while (sentence.includes(word)) {
        sentence = sentence.replace(word, '*'.repeat(wordLength));
    }
    console.log(sentence);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden')
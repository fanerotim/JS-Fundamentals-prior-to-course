function stringSubstring(word, input) {

    let sentence = input.split(' ');

    for (let curWord of sentence) {
        if (curWord.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');
stringSubstring('java', 'JaVa is the best programming language');
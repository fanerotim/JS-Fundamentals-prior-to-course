function solve(word, text) {
    
    let textInLowerCase = text.toLowerCase();
    let wordToFind = word.toLowerCase();

    textInLowerCase = textInLowerCase.split(' ');
    let isFound = false;
    textInLowerCase.forEach(el => {
        if (el === wordToFind) {
            console.log(word);
            isFound = true;
        }
    })

    if (!isFound) {
        console.log(`${word} not found!`);
    }
}

// solve('javascript', 'JavaScript is the best programming language');
// solve('python', 'JavaScript is the best programming language');
solve('best', 'JavaScript is the best programming language');
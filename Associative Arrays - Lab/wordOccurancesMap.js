function wordOccurances(arr) {

    let words = new Map();

    arr.forEach(word => {
        let wordCounter = 0;
        arr.forEach(nextWord => {
            if (word === nextWord) {
                wordCounter++;
            }   
        })
        words.set(word, wordCounter);
    })
    words = Array.from(words.entries());
    words.sort((occuranceOne, occuranceTwo) => occuranceTwo[1] - occuranceOne[1]);

    for (let [word, count] of words) {
        console.log(`${word} -> ${count} times`)
    }
}

wordOccurances(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
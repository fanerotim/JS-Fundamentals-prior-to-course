function wordTracker(arr) {

    let tracker = {};
    let keyWords = arr.shift().split(' ');

    keyWords.forEach(word => {
        let wordCounter = 0;
        arr.forEach(nextWord => {
            if (word === nextWord) {
                wordCounter++;
            }
        })
        tracker[word] = wordCounter;
    });
    tracker = Object.entries(tracker).sort((wordA, wordB) => wordB[1] - wordA[1]);
    
    for (let word of tracker) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])
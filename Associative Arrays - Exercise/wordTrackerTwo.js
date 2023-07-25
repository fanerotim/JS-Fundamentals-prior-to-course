function wordTrackerTwo(arr) {

    let searchedWords = arr.shift().split(' ');
    let result = {};

    for (let word of searchedWords) {
        result[word] = 0;
        for (let item of arr) {
            if (word === item) {
                result[word]++;
            }
        }
    }
    result = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (let el of result) {
        console.log(`${el[0]} - ${el[1]}`);
    }
}

wordTrackerTwo([
    'this sentence pesho',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);

wordTrackerTwo([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])
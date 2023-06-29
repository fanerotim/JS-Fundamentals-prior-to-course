function wordOccurances(arr) {

    let occurances = {};

    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i];
        let counter = 1;

        for (let j = i + 1; j < arr.length; j++) {
            let nextWord = arr[j];

            if (currentWord === nextWord) {
                counter++;
            }
        }

        if (!occurances.hasOwnProperty(currentWord)) {
            occurances[currentWord] = counter;
        }
    }
    occurances = Object.entries(occurances);
    occurances.sort((wordOne, wordTwo) => wordTwo[1] - wordOne[1]);
    occurances = Object.fromEntries(occurances);
    
    for (let word in occurances) {
        console.log(`${word} -> ${occurances[word]} times`)
    }
}

// wordOccurances(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurances(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
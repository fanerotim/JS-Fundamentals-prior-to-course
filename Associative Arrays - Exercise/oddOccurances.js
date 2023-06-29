function oddOccurances(input) {

    let startingArr = input.split(' ').map(a => a.toLowerCase());
    let occurances = {};
    let result = [];

    for (let i = 0; i < startingArr.length; i++) {
        let word = startingArr[i];
        let wordCounter = 1;
        for (let j = i + 1; j < startingArr.length; j++) {
            let nextWord = startingArr[j];

            if (word === nextWord) {
                wordCounter++;
            }
        }
        if (!occurances.hasOwnProperty(word)) {
            occurances[word] = wordCounter;

            if (wordCounter % 2 !== 0) {
                result.push(word);
            }
        }
    }
    console.log(result.join(' '))
}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurances('Cake IS SWEET is Soft CAKE sweet Food');
function commonElements(arrOne, arrTwo) {

    let symOne = '';
    let symTwo = '';

    for (let i = 0; i < arrOne.length; i++) {
        symOne = arrOne[i];

        for (let j = 0; j < arrTwo.length; j++) {
            symTwo = arrTwo[j];

            if (symOne === symTwo) {
                console.log(symOne);
            }
        }
    }
}

commonElements(["S", "o", "f", "t", "U", "n", "i", " "],
["s", "o", "c", "i", "a", "l"])
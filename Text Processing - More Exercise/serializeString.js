function serializeString(arr) {

    let word = arr[0];
    let printedLetters = '';

    for (let letter of word) {
        let stringToPrint = '';
        stringToPrint += `${letter}:`;
        let isPrinted = false;

        for (let i = 0; i < word.length; i++) {
            let innerLetter = word[i];

            if (!printedLetters.includes(letter)) {
                isPrinted = true;
            }

            if (innerLetter === letter) {
                stringToPrint += `${i}/`
            }
        }

        if (isPrinted) {
            console.log(stringToPrint.substring(0, stringToPrint.length - 1));
            printedLetters += letter;
        }
    }
}

// serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);
// serializeString([""]);
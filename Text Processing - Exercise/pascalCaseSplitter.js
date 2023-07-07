function pascalCaseSplitter(input) {

    let stringToPrint = input[0];

    for (let i = 1; i < input.length; i++) {
        let currentLetter = input[i];

        if (currentLetter === currentLetter.toUpperCase()) {
            stringToPrint += `, `
        }
        stringToPrint += currentLetter;
    }
    console.log(stringToPrint);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo')
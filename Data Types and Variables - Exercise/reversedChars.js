function reversedChars(letterOne, letterTwo, letterThree) {

    let result = '';

    let currentLetter = '';
    for (let i = arguments.length - 1; i >= 0; i--) {
        currentLetter = arguments[i];
        result += `${currentLetter} `;
    }
    console.log(result);
}

reversedChars(1,
    'L',
    '&')
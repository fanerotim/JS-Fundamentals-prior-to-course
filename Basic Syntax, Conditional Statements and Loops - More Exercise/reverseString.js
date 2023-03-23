function reverseString(str) {

    let currentLetter = '';
    for (let i = str.length - 1; i >= 0; i--) {
        currentLetter += str[i];  
    }
    console.log(currentLetter);
}

reverseString('1234');
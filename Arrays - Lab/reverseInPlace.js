function reverseInPlace(input) {
    
    let currentElement = '';
    let result = '';

    for (let i = input.length - 1; i >= 0; i--) {
        currentElement = input[i];
        result += `${currentElement} `
    }
    console.log(result);
}

reverseInPlace(
    33,
    123,
    0,
    'dd');
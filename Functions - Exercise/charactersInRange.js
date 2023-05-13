function charactersInRange(firstChar, secondChar) {

    let firstCharNum = firstChar.charCodeAt();
    let secondCharNum = secondChar.charCodeAt();

    let min = Math.min(firstCharNum, secondCharNum);
    let max = Math.max(firstCharNum, secondCharNum);

    let result = '';

    for (let i = min + 1; i < max; i++) {
        result += `${String.fromCharCode(i)} `
    }
    console.log(result);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
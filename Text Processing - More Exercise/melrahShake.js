function melrahShake(arr) {

    let string = arr[0];
    let pattern = arr[1];
    let patternLength = pattern.length;
    let isShaken = false;
    let result = [];

    while (string.includes(pattern)) {

        let isFirstMatch = false;
        let isLastMatch = false;
        let isNotEmpty = false;

        let firstMatchStart = string.indexOf(pattern);
        let firstMatchEnd = firstMatchStart + patternLength - 1;

        for (let i = firstMatchStart; i <= firstMatchEnd; i++) {
            isNotEmpty = true;
            if (i === firstMatchStart) {
                string = string.split('');
            }
            string.splice(firstMatchStart, 1)
            isFirstMatch = true;
        }

        if (isNotEmpty) {
            string = string.join('');
        } else {
            break;
        }

        let lastMatchStart = string.lastIndexOf(pattern);
        let lastMatchEnd = lastMatchStart + patternLength - 1;

        for (let j = lastMatchStart; j <= lastMatchEnd; j++) {
            if (j === lastMatchStart) {
                string = string.split('');
            }
            string.splice(lastMatchStart, 1);
            isLastMatch = true;
        }

        if (isFirstMatch && isLastMatch) {
            result.push('Shaked it.');
            isShaken = true;

            let indexToRemoveFromPattern = Math.floor(patternLength / 2);
            pattern = pattern.split('');
            pattern.splice(indexToRemoveFromPattern, 1);
            if (pattern.length > 0) {
                pattern = pattern.join('');
                patternLength = pattern.length;
                string = string.join('');
            } else {
                string = string.join('');
                break;
            }
        }
    }
    result.forEach(el => console.log(el));
    console.log('No shake.');
    console.log(string);
}

melrahShake([
    'astalavista baby',
    'sta']);

melrahShake([
    '##mtm!!mm.mm*mtm.#',
    'mtm']);
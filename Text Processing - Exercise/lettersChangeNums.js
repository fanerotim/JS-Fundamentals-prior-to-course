function solve(input) {

    let inputArr = input.split(/\s+/);
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let capitalPattern = /[A-Z]/;
    let lowerPattern = /[a-z]/;
    let totalSum = 0;

    for (let item of inputArr) {
        let initialLetter = item.substring(0, 1);
        item = item.replace(initialLetter, '');
        let endLetter = item.substring(item.length - 1);
        item = item.replace(endLetter, '');
        item = Number(item);

        let currentIndex = alphabet.indexOf(initialLetter.toLowerCase());
        let lastIndex = alphabet.indexOf(endLetter.toLowerCase());
        currentIndex = Number(currentIndex) + 1;
        lastIndex = Number(lastIndex) + 1;

        if (initialLetter.match(capitalPattern)) {
            item /= currentIndex;
        } else if (initialLetter.match(lowerPattern)) {
            item *= currentIndex;
        }

        if (endLetter.match(capitalPattern)) {
            item -= lastIndex
        } else if (endLetter.match(lowerPattern)) {
            item += lastIndex;
        }
        totalSum += item;
    }
    console.log(totalSum.toFixed(2));
}

solve('A12b s17G');
solve('P34562Z q2576f    H456z');
solve('a1A');
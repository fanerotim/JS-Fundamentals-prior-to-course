function sumator(arr) {

    let startSymbol = arr[0];
    let endSymbol = arr[1];
    let totalSum = 0;

    startSymbol = startSymbol.charCodeAt();
    endSymbol = endSymbol.charCodeAt();

    let start;
    let end;

    if (startSymbol < endSymbol) {
        start = startSymbol;
        end = endSymbol;
    } else {
        start = endSymbol;
        end = startSymbol;
    }

    for (let letter of arr[2]) {
        
        if (letter.charCodeAt() > start && letter.charCodeAt() < end) {
            totalSum += letter.charCodeAt();
        }
    }
    console.log(totalSum);
}

sumator([
    '.',
    '@',
    'dsg12gr5653feee5']);

sumator([
    '?',
    'E',
    '@ABCEF']);

sumator([
    'a',
    '1',
    'jfe392$#@j24ui9ne#@$']);
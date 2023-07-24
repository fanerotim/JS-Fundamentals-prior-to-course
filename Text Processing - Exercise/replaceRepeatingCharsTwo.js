function solve(input) {

    let strToPrint = '';

    for (let letter of input) {  
        if (letter !== strToPrint[strToPrint.length - 1]) {
            strToPrint += letter;
        }
    }
    console.log(strToPrint);
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');
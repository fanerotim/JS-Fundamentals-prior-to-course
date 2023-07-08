function valueOfString(input) {

    let command = input[1];
    let sumOfAscii = 0;

    for (let item of input[0]) {

        switch (command) {
            case 'LOWERCASE':
                if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
                    sumOfAscii += item.charCodeAt();
                }
                break;
            case 'UPPERCASE':
                if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
                    sumOfAscii += item.charCodeAt();
                }
                break;
        }
    }
    console.log(`The total sum is: ${sumOfAscii}`);
}

valueOfString([
    'HelloFromMyAwesomePROGRAM',
    'LOWERCASE']);

valueOfString([
    'AC/DC',
    'UPPERCASE']);
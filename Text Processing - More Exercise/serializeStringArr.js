function solve(arr) {

    let letters = arr[0].split('');
    let result = [];

    for (let letter of letters) {

        let letterToFind = letter;
        let counter = 0;
        let strToPrint = '';

        for (let i = 0; i < letters.length; i++) {
            let innerLetter = letters[i];

            if (letterToFind === innerLetter) {
                counter++;
                if (counter === 1) {
                    strToPrint += `${letter}:${i}`
                } else {
                    strToPrint += `/${i}`
                }
            }
        }

        if (!result.includes(strToPrint)) {
            result.push(strToPrint);
        }
    }
    result.forEach(element => console.log(element));
}


solve(["abababa"])
// solve(["avjavamsdmcalsdm"]);
// solve(["xwz"]);
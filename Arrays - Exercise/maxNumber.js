function maxNumber(input) {

    let result = '';
    let currentNum = 0;
    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        currentNum = Number(input[i]);

        let nextNum = 0;

        for (let j = i + 1; j < input.length; j++) {
            nextNum = Number(input[j]);

            if (currentNum <= nextNum) {
                counter++;
            }  
        }

        if (counter === 0) {
            result += `${currentNum} `;
        } else {
            counter = 0;
        }
    }
    console.log(result);
}

maxNumber(41,
    41,
    34,
    20)
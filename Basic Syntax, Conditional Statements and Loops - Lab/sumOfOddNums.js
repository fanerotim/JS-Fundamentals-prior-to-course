function sumOfOddNums(n) {

    let counter = 0;
    let sum = 0; 

    for (let i = 1; i <= 100; i++) {

        if (i % 2 !== 0) {
            console.log(i);
            counter++;
            sum += i;

            if (counter === n) {
                break;
            }
        }
    }
    console.log(`Sum: ${sum}`)
}

sumOfOddNums(5);
function sumDigits(num) {

    num = num.toString();
    let sum = 0;

    let currentNum = 0;
    for (let i = 0; i < num.length; i++) {
        currentNum = num[i];

        sum += Number(currentNum);
    }
    console.log(sum);
}

sumDigits(97561);
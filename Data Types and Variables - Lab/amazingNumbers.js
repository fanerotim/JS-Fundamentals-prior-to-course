function amazingNums(num) {

    num = num.toString();
    let result = 0;
    let currentNum = 0;

    for (let i = 0; i < num.length; i++) {
        currentNum = num[i];

        result += Number(currentNum);
    }
    result = result.toString();

    if (result.includes(9) === true) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNums(1233)
function mergeArr(arrOne, arrTwo) {

    let result = [];

    for (let i = 0; i < arrOne.length; i++) {
        if (i % 2 === 0) {
            result.push(Number(arrOne[i]) + Number(arrTwo[i]));
        } else {
            result.push(arrOne[i] + arrTwo[i]);
        }
    }
    console.log(result.join(' - '));
}

mergeArr(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);

mergeArr(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])
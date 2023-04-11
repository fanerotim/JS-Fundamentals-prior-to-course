function mergeArrays(arrOne, arrTwo) {

    let result = '';

    for (let i = 0; i < arrOne.length; i++) {

        if (i % 2 === 0) {

            if (i + 1 === arrOne.length) {
                result += `${Number(arrOne[i]) + Number(arrTwo[i])}`
            } else {
                result += `${Number(arrOne[i]) + Number(arrTwo[i])} - `
            }
        } else {

            if (i + 1 === arrOne.length) {
                result += `${arrOne[i] + arrTwo[i]}`
            } else {
                result += `${arrOne[i] + arrTwo[i]} - `
            }
        }
    }
    console.log(result);
}

mergeArrays(["5", "15", "23", "56", "35"],
["17", "22", "87", "36", "11"])
function bombNumbers(arrOne, arrTwo) {

    let numToRemove = arrTwo[0];
    let power = arrTwo[1];
    let bombIndex = arrOne.indexOf(numToRemove);
    let removedBomb = arrOne.filter((a, i) => i < bombIndex - power || i > bombIndex + power);
    bombIndex = removedBomb.indexOf(numToRemove);

    for (el of removedBomb) {
        bombIndex = removedBomb.indexOf(numToRemove);
        if (el === numToRemove) {
            removedBomb = removedBomb.filter((a, i) => i < bombIndex - power || i > bombIndex + power);
        }
    }
    let sum = 0;

    for (num of removedBomb) {
        sum += Number(num);
    }
    console.log(sum);
}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2], [2, 1]);

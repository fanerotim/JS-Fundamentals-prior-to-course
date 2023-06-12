function bombNums(sequence, bombNumbers) {

    let result = sequence.slice(0);
    let bombNumber = Number(bombNumbers.shift());
    let power = Number(bombNumbers.shift());
    
    for (let i = 0; i < result.length; i++) {
        if (result.includes(bombNumber)) {
            let bombIndex = result.indexOf(bombNumber);
            result = result.filter((a, i) => i < bombIndex - power || i > bombIndex + power);
        }
    }
    let sum = 0;

    for (el of result) {
        sum += el;
    }
    console.log(sum);
}

bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNums([1, 7, 7, 1, 2, 3], [7, 1]);
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
function rosettaStone(arr) {

    let decodingMatrixLength = Number(arr.shift());
    let decodingMatrix = [];
    let stone = [];
    let alphabet = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    for (let i = 0; i < decodingMatrixLength; i++) {
        decodingMatrix.push(arr.shift(arr[i]).split(" "));
    }

    for (let j = 0; arr.length > 0; j++) {
        stone.push(arr.shift(arr[j]).split(" "));
    }

    let rowCounter = 0;
    let colCounter = -1;

    for (let row = 0; row < stone.length; row++) {
        for (let col = 0; col < stone[0].length; col++) {
            colCounter++;

            if (colCounter === decodingMatrix[0].length) {
                colCounter = 0;
            }

            if (rowCounter === decodingMatrix.length) {
                rowCounter = 0;
            }

            stone[row][col] = Number(stone[row][col]) + Number(decodingMatrix[rowCounter][colCounter]);


            if (col === stone[row].length - 1) {
                rowCounter++;
                colCounter = -1;
            }
        }
    }

    let result = [];
    let letterCounter = 0;
    for (let num = 0; num < stone.length; num++) {
        let currentRow = stone[num];

        for (let curNum = 0; curNum < currentRow.length; curNum++) {
            let curNumber = Number(currentRow[curNum]);

            if (curNumber === 0) {
                result.push(alphabet[0]);
            }

            for (let letter = 1; letter <= curNumber; letter++) {
                letterCounter++;

                if (letterCounter === alphabet.length) {
                    letterCounter = 0;
                }

                if (letter === curNumber) {
                    result.push(alphabet[letterCounter]);
                    letterCounter = 0;
                }
            }
        }
    }
    console.log(result.join(""));
}

rosettaStone([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);

rosettaStone([
    '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22']);

rosettaStone(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']);

rosettaStone([
    '1',
    '1 0 1 1 0 1 1 1 1',
    '8 0 0 12 0 7 4 17 4'
]);
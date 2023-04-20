function spiralMatrix(l, h) {

    let startRow = 0;
    let startCol = 0;
    let endRow = l - 1;
    let endCol = h - 1;

    let result = [];
    let counter = 1;

    for (let r = 0; r < l; r++) {
        result.push([]);
    }

    while (startCol <= endCol && startRow <= endRow) {

        for (let i = startRow; i <= endRow; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let j = startRow; j <= endCol; j++) {
            result[j][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let z = endCol; z >= startCol; z--) {
            result[endRow][z] = counter;
            counter++;
        }
        endRow--;

        for (h = endCol; h > startCol; h--) {
            result[h][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    for (let r = 0; r < result.length; r++) {
        console.log(result[r].join(' '));
    }
    
}

// spiralMatrix(3, 3);
spiralMatrix(5, 5);
// spiralMatrix(4, 4)
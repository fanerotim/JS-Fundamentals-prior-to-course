function spiralMatrix(l, h) {

    let startRow = 0;
    let endRow = l - 1;
    let startCol = 0;
    let endCol = h - 1;

    let counter = 1;
    let result = [];

    for (let y = 0; y < l; y++) {
        result[y] = [];
    }

    while (startCol <= endCol && startRow <= endRow) {

        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let k = endCol; k >= startCol; k--) {
            result[endRow][k] = counter;
            counter++;
        }
        endRow--;

        for (let z = endRow; z >= startRow; z--) {
            result[z][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    for (let u = 0; u < l; u++) {
        console.log(result[u].join(' '));
    }
}

    
spiralMatrix(3, 3);
// spiralMatrix(5, 5);
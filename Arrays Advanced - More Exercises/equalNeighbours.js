function equalNeighbours(arr) {
    let rowsCount = arr.length - 1;
    let colsCount = arr[0].length
    let equalPairs = 0;

    for (let row = 0; row <= rowsCount; row++) {

        for (let col = 0; col < colsCount; col++) {
            let curNum = arr[row][col];

            if (curNum === arr[row][col + 1]) {
                equalPairs++;
            }

            if (row < rowsCount) {
                if (curNum === arr[row + 1][col]) {
                    equalPairs++;
                }
            } 
        }
    }
    console.log(equalPairs);
}

equalNeighbours(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);

equalNeighbours(
    [['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']])

equalNeighbours([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
])
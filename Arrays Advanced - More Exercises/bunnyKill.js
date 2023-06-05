function solve(arr) {

    let rowCol = arr.pop();
    let rowColArr = rowCol.split(' ');
    let row = '';
    let col = '';
    let damageDone = 0;
    let killCounter = 0;

    let finalArr = [];
    for (let a = 0; a < arr.length; a++) {
        let currentArr = arr[a].split(' ');
        finalArr[a] = currentArr;
    }

    let counter = 0;

    while (rowColArr.length > 0) {
        row = '';
        col = '';

        for (let r = 0; r < 1; r++) {
            let curRowCol = rowColArr[r].split(' ').join();
            rowColArr.shift();

            for (let z = 0; z < curRowCol.length; z++) {
                if (curRowCol[z] !== ',' && counter < 1) {
                    row += curRowCol[z];
                } else if (curRowCol[z] === ',') {
                    counter++;
                } else if (counter = 1) {
                    col += curRowCol[z];
                }
            }
        }
        row = Number(row);
        col = Number(col);
        counter = 0;

        let bombBunny = Number(finalArr[row][col]);

        if (Number(finalArr[row][col]) === 0) {
            continue;
        } else {
            damageDone += bombBunny;
            killCounter++;
        }

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < finalArr[0].length; j++) {

                if ((j === col || j + 1 === col || (j - 1 === col && j !== finalArr[0].length)) && (i === row || i + 1 === row || i - 1 === row)) {
                    finalArr[i][j] = Number(finalArr[i][j]) - bombBunny;

                    if (finalArr[i][j] < 0) {
                        finalArr[i][j] = 0;
                    }
                }
            }
        }
    }

    for (let h = 0; h < finalArr.length; h++) {
        for (let g = 0; g < finalArr[h].length; g++) {

            if (Number(finalArr[h][g]) > 0) {
                damageDone += Number(finalArr[h][g]);
                killCounter++;
            }
        }
    }
    console.log(damageDone);
    console.log(killCounter);
}

solve([
    '10 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']);

// solve([
//     '10 10 10',
//     '10 10 10',
//     '10 10 10',
//     '0,0']);

// solve([
//     '10 10 15 20 10 10 15 20',
//     '10 10 10 10 10 10 15 20',
//     '10 15 10 10 10 10 15 20',
//     '10 10 10 10 10 10 15 20',
//     '10 10 10 10 10 10 15 20',
//     '12,24 2,1 4,2 4,3 1,5 2,4']);
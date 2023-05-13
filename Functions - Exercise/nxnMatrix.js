function nxnMatrix(num) {

    let result = [];

    //Creating the nested arrays
    for (let i = 0; i < num; i++) {
        result.push([]);
    }

    let col = 0;

    //Populating the nested arrays
    while (col < num) {
        for (let row = 0; row < num; row++) {
            result[col][row] = num;
        }
        col++;
    }

    for (let k = 0; k < num; k++) {
        console.log(result[1].join(' '));
    }
    
}

nxnMatrix(3);
// nxnMatrix(7);
// nxnMatrix(2);
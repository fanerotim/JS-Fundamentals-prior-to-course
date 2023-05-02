function orbit(arr) {

    let width = arr[0];
    let height = arr[1];
    let x = arr[2];
    let y = arr[3];

    let result = [];

    for (let i = 0; i < width; i++) {
        result[i] = [];

        for (let k = 0; k < height; k++) {
            result[i][k] = '';
        }
    }
    result[x][y] = 1;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            result[i][j] = Math.max(Math.abs(i - y), Math.abs(j - x)) + 1;
        }
    }

    let arrCount = 0;
    for (let z = 0; z < result.length; z++) {
        console.log(result[arrCount].join(' '));
        arrCount++;
    }
}

// orbit([4, 4, 0, 0])
orbit([5, 5, 2, 2])
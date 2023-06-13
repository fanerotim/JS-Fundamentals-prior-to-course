function arrRotations(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let rotatedElement = arr.shift();
        arr.push(rotatedElement);
    }
    console.log(arr.join(' '));
}

arrRotations([51, 47, 32, 61, 21], 2);
arrRotations([32, 21, 61, 1], 4);
arrRotations([2, 4, 15, 31], 5);
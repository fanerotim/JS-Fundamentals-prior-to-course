function magicMatrices(arr) {

    let sumToCompare = 0;
    let secondSum = 0;
    let currentElement = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            currentElement = Number(arr[i][j])
            secondSum += currentElement;

            if (i === 0) {
                sumToCompare += currentElement;
            }   
        }
    }
    
    if (secondSum / arr[0].length === sumToCompare) {
        console.log("true");
    } else {
        console.log("false");
    }
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);

magicMatrices([
    [10, 0, 0],
    [0, 10, 0],
    [0, 10, 0]]);
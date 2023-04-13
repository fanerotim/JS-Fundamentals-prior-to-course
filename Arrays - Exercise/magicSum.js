function magicSum(arr, num) {
    
    let firstNum = 0;

    for (let i = 0; i < arr.length; i++) {
        firstNum = Number(arr[i]);

        let secondNum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            secondNum = Number(arr[j]);

            if (firstNum + secondNum === num) {
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8],
    27)
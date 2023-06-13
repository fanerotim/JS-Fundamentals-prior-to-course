function maxNumber(arr) {

    let result = []; 
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (currentNumber > arr[j]) {
                counter++;
                if (counter + i === arr.length - 1) {
                    result.push(currentNumber);
                    counter = 0;
                }
            }
        }
        counter = 0;
    }
    if (arr[arr.length - 1] < result[result.length - 1] || result.length === 0) {
        result.push(arr[arr.length - 1])
    }
    console.log(result.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([41, 41, 34, 20]);
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([27, 19, 42, 2, 13, 45, 48]);
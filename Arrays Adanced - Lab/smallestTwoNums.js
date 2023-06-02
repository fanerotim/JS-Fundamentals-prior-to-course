function smallestElements(arr) {

    let sortedArray = arr.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i <= 1; i++) {
        result.push(arr[i]);
    }
    console.log(result.join(' '))
}

smallestElements([30, 15, 50, 5]);
smallestElements([3, 0, 10, 4, 7, 3]);
function firstAndLastKNums(arr) {
    let k = arr[0]
    let firstKNums = arr.slice(1, k + 1);
    let lastKNums = arr.slice(arr.length - k);

    console.log(firstKNums.join(' '));
    console.log(lastKNums.join(' '));
}

firstAndLastKNums([2, 7, 8, 9]);
firstAndLastKNums([3, 6, 7, 8, 9]);
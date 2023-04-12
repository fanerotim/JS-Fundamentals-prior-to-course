function arrayRotation(arr, n) {

    let chunkOfArr = 0;

    for (let i = 1; i <= n; i++) {
        
        chunkOfArr = arr.splice(0, 1);
        arr.push(chunkOfArr[0]);
    }

    let result = '';

    for (let j = 0; j < arr.length; j++) {
        result += `${arr[j]} `;
    }

    console.log(result);
}

arrayRotation([2, 4, 15, 31],
    5)
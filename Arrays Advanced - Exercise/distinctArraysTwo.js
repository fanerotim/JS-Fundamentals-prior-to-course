function distinctArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        let firstNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let secondNum = arr[j]
            if (firstNum === secondNum) {
                arr.splice(j, 1)
                j--;
            }
        }
    }
    console.log(arr.join(' '));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
distinctArray([5, 5, 5]);
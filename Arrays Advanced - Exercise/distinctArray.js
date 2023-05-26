function distinctArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let elementToCompare = arr[j]
            if (currentElement === elementToCompare) {
                let removedNum = arr.splice(j, 1);

                if (removedNum[0] === arr[j]) {
                    arr.splice(j, 1);
                }
            }
        }
    }
    console.log(arr.join(' '));
}

// distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 7, 2, 3, 4, 1, 2]);
// distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
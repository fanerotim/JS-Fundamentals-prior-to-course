function nonDecreasingSubset(arr) {

    let currentElement = 0;
    let buff = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        currentElement = arr[i];

        if (currentElement >= buff) {
            buff = currentElement;
            newArr.push(currentElement);
        }
    }
    console.log(newArr.join(" "));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);
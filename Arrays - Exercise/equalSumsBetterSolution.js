function solve(arr) {

    let leftSum = 0;
    let rightSum = 0;
    let index = 0;
    let isFound = false;

    while (index < arr.length) {

        for (let i = index - 1; i >= 0; i--) {
            leftSum += Number(arr[i]);
        }

        for (let j = index + 1; j < arr.length; j++) {
            rightSum += Number(arr[j]);
        }

        if (leftSum === rightSum) {
            console.log(index);
            isFound = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
        index++;
    }
    if (isFound == false) {
        console.log('no');
    } 
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
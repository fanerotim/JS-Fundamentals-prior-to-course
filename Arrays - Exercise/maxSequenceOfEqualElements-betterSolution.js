function solve(arr) {

    let leftmost = [];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        if (leftmost.length === arr.length) {
            console.log(leftmost.join(' '));
            return;
        }

        leftmost.push(currentNum);

        for (let j = i + 1; j < arr.length; j++) {

            let secondNum = arr[j]; 

            if (leftmost[leftmost.length - 1] === secondNum) {
                leftmost.push(secondNum);
            } else if (leftmost.length > 1) {
                if (result.length < leftmost.length) {
                    result = leftmost;
                    leftmost = [];
                } else {
                    leftmost = [];
                }
                break;
            } else {
                leftmost = [];
                break;
            }
        }
    }
    console.log(result.join(' '));
}

solve([3, 3, 2, 2, 2, 1, 1]);
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])
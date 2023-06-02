function lastKNumbersSequence(n, k) {

    let result = [1];
    let lastThree = 0;
    let sum = 0;

    for (let i = 1; i < n; i++) {
        let lastElement = result.length - 1
        
        // lastThree = result.slice(-k); commented this out as lector said it's considered hackery and frowned upon
        if (lastElement >= k) {
            lastThree = result.slice(lastElement - (k - 1))
        } else {
            lastThree = result;
        }

        for (let j = 0; j < k; j++) {
            if (lastThree[j] !== undefined) {
                sum += lastThree[j];
            }
        }
        result.push(sum);
        sum = 0;
    }
    console.log(result.join(' '));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
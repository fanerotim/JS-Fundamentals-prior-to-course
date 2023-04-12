function equalSums(input) {

    let currentNum = 0;
    let isEqual = false;
    let counter = -1;

    for (let i = 0; i < input.length; i++) {
        currentNum = Number(input[i]);
        counter++;

        let leftSum = 0;

        let zeroIndex = input.indexOf(input[0])

        for (let j = counter; j > zeroIndex; j--) {

            while (j > zeroIndex) {
                j--;
                leftSum += Number(input[j]);
            }
            let rightSum = 0;

            for (let k = counter; k < input.length - 1; k++) {
                rightSum += Number(input[k + 1]);
            }

            if (leftSum === rightSum) {
                // console.log(input.indexOf(currentNum));
                console.log(counter);
                isEqual = true;
                return;
            }
            
        }
    }

    if (input.length === 1) {
        console.log("0")
    };

    if (isEqual === false && input.length > 1) {
        console.log("no");
    };
}

equalSums(1,
    2,
    3)
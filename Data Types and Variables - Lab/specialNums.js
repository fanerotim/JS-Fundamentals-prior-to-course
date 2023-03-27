function specialNums(num) {

    let currentNum = 0;


    for (let i = 1; i <= num; i++){
        currentNum = i.toString();

        if (currentNum <= 9) {
            if (i === 5 || i === 7 || i === 11) {
                console.log(`${i} -> True`)
            } else {
                console.log(`${i} -> False`)
            }
        } else if (currentNum > 9) {
            let sum = 0;

            for (let j = 0; j < currentNum.length; j++) {
                sum += Number(currentNum[j]);
            }

            if (sum === 5 || sum === 7 || sum === 11) {
                console.log(`${currentNum} -> True`)
            } else {
                console.log(`${currentNum} -> False`)
            }

            sum = 0;
        } 
    }
}

specialNums(15);
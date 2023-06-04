function numbers(nums) { 

    let numsArr = nums.split(' ');
    let sortedNums = numsArr.sort((a, b) => b - a);
    let sum = 0;

    for (el of sortedNums) {
        sum += Number(el);
    }
    let averageNum = (sum / sortedNums.length).toFixed(2);
    
    let resultArr = [];
    let counter = 0;

    for (let i = 0; i < sortedNums.length; i++) {
        let currentNum = Number(sortedNums[i]);
        counter++;

        if (currentNum > averageNum && counter <= 5) {
            resultArr.push(currentNum);
        } else if (currentNum === averageNum) {
            break;
        }
    }

    if (resultArr.length === 0) {
        console.log('No');
    } else {
        console.log(resultArr.join(' '));
    }
}

numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1')
numbers('-1 -2 -3 -4 -5 -6');
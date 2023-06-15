function numbers(arr) {

    let initialArr = arr.split(' ').map(a => Number(a));
    
    let averageNumber = 0;
    for (let num of initialArr) {
        averageNumber += num;
    }

    averageNumber = averageNumber / initialArr.length;
    initialArr = initialArr.sort((a, b) => b - a);
    let counter = 0;

    initialArr = initialArr.filter(a => {
        if (a > averageNumber) {
            counter++;
            if (counter < 6) {
                return a;
            }
        }
    })

    if (initialArr.length > 0) {
        console.log(initialArr.join(' '));    
    } else {
        console.log('No');
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6')
function solve(number: number) {

    const numAsStringArr = number
                            .toString()
                            .split('');

    let sum = numAsStringArr.reduce((acc, num) => acc + Number(num), 0);

    let averageSum = (sum / numAsStringArr.length);

    while(averageSum <= 5) {

        numAsStringArr.push('9')
        sum = numAsStringArr.reduce((acc, num) => acc + Number(num), 0);
        averageSum = (sum / numAsStringArr.length);

    }
    console.log(numAsStringArr.join(''));

}

solve(101)
solve(5835)
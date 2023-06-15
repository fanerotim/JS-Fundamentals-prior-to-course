function arrayModifier(arr) {

    let initialArr = arr.shift().split(' ').map(a => Number(a));

    let index = 0;
    let command = arr[index];

    while (command !== 'end') {
        command = command.split(' ');
        let action = command.shift();
        let indexOne = Number(command.shift());
        let indexTwo = Number(command.shift());
        let firstNumber = initialArr[indexOne];
        let secondNumber = initialArr[indexTwo];

        switch (action) {
            case "swap":
                initialArr[indexOne] = secondNumber;
                initialArr[indexTwo] = firstNumber;
                break;
            case "multiply":
                let multipliedNumber = firstNumber * secondNumber;
                initialArr[indexOne] = multipliedNumber;
                break;
            case "decrease":
                initialArr = initialArr.map((a => a - 1));
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(initialArr.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])
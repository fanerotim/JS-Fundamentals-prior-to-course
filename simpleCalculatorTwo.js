function simpleCalc(num1, num2, operator) {

    let multiply = () => num1 * num2;
    let divide = () => num1 / num2;
    let add = () => num1 + num2;
    let subtract = () => num1 - num2;

    switch(operator) {
        case 'multiply':
            console.log(multiply());
            break;
        case 'divide':
            console.log(divide());
            break;
        case 'add':
            console.log(add());
            break;
        case 'subtract':
            console.log(subtract());
            break;
    }   
}

simpleCalc(5, 5, 'multiply');
simpleCalc(40, 8, 'divide');
simpleCalc(12, 19, 'add');
simpleCalc(50, 13, 'subtract');
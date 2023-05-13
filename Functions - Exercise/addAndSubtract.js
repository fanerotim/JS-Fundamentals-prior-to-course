function addAndSubtract(firstNum, secondNum, thirdNum) {

    let sum = () => {
        return firstNum + secondNum;
    }
    let result = sum();

    let subtract = function () {
        return result - thirdNum;
    }
    let finalResult = subtract();

    console.log(finalResult);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
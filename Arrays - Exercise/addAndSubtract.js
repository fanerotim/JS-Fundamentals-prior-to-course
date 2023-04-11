function addAndSubtract(input) {

    let newArr = [];
    let currentNum = 0;
    let inputSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < input.length; i++) {
        currentNum = Number(input[i]);
        inputSum += currentNum;

        if (currentNum % 2 == 0) {
            currentNum += i;
            newArr.push(currentNum);
        } else {
            currentNum -= i;
            newArr.push(currentNum);
        }
    }

    for (let j = 0; j < newArr.length; j++) {
        newArrSum += Number(newArr[j]);
    }
    console.log(newArr);
    console.log(inputSum);
    console.log(newArrSum);
}

addAndSubtract(
    5,
    15,
    23,
    56,
    35)
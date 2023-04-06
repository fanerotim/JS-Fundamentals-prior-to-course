function reverseAnArrayOfNums(num, arr) {

    let currentNum = 0;
    let newArr = '';
    for (let i = num - 1; i >= 0; i--) {
        currentNum = arr[i];

        newArr += `${currentNum} `;
    }
    console.log(newArr);
}

reverseAnArrayOfNums(
    3,
    10,
    20,
    30,
    40,
    50)
function distinctArrays(arr) {

    let findRepeating = arr.filter((num, index) => arr.indexOf(num) === index);

    console.log(findRepeating.join(' '));
}

distinctArrays([1, 2, 3, 4])
distinctArrays([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArrays([20, 8, 12, 13, 4, 4, 8, 5])
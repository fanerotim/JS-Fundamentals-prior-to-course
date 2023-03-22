function sortNums(n, m, l) {

    let arr = [n, m, l];

    arr.sort();
    arr.reverse();
    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

sortNums(3,
    1,
    -2)
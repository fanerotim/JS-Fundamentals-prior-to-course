function sort(arr) {

    let sortedArray = [];
    let counter = 0;

    while (arr.length > 0) {
        if (counter % 2 === 0) {
            let largestNum = Math.max(...arr);
            sortedArray.push(largestNum)
            arr.splice(arr.indexOf(largestNum), 1);
        } else {
            let smallestNum = Math.min(...arr);
            sortedArray.push(smallestNum);
            arr.splice(arr.indexOf(smallestNum), 1);
        }
        counter++;   
    }
    console.log(sortedArray.join(' '));
    
}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sort([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
function processOddNums(arr) {

    let oddNumArray = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (i % 2 !== 0) {
            oddNumArray.push(arr[i]);
        }
    }
    let doubledOddNumsArr = oddNumArray.map(num => num * 2);
    console.log(doubledOddNumsArr.reverse().join(' '));  
}

processOddNums([10, 15, 20, 25]);
// processOddNums([3, 0, 10, 4, 7, 3]);
// processOddNums([1])
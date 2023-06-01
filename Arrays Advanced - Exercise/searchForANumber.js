function searchForANumber(arrOne, arrTwo) {

    let numberOfElementsToTake = arrTwo[0];
    let numberOfElementsToRemove = arrTwo[1];
    let numerToFind = arrTwo[2];

    let newArr = arrOne.slice(0, numberOfElementsToTake);
    newArr = newArr.slice(numberOfElementsToRemove);
    let counter = 0;

    let result = newArr.map((a) => {
        if (a === numerToFind)
        return counter++;
    })

    console.log(`Number ${numerToFind} occurs ${counter} times.`)
 
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
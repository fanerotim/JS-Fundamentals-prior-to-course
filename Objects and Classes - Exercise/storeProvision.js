function storeProvision(arrOne, arrTwo) {

    let result = {};
    let itemIndex;
    let updatedQuantity = 0;
    for (let i = 0; i < arrTwo.length; i += 2) {
        let currentItem = arrTwo[i];

        if (arrOne.includes(currentItem)) {
            itemIndex = arrOne.indexOf(currentItem);
            updatedQuantity = Number(arrOne[itemIndex + 1]) + Number(arrTwo[i + 1]);
            arrOne[itemIndex + 1] = updatedQuantity;
        } else {
            arrOne.push(currentItem, arrTwo[i + 1]);
        }     
    }

    for (let j = 0; j < arrOne.length; j+= 2) {
        let currentEl = arrOne[j];
        result[currentEl] = Number(arrOne[j + 1])
    }

    for (let item in result) {
        console.log(`${item} -> ${result[item]}`);
    } 
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])
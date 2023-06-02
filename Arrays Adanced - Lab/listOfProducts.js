function listOfProducts(arr) {

    // let sortedArray = arr.sort((a, b) => a.localeCompare(b));
    let sortedArray2 = arr.sort();
    let counter = 1;

    for (let i = 0; i < sortedArray2.length; i++) {
        console.log(`${counter}.${sortedArray2[i]}`);
        counter++;
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);
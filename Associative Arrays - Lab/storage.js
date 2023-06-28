function storage(arr) {

    let storedItems = {};

    for (let el of arr) {
        let [item, quantity] = el.split(' ');
        quantity = Number(quantity);

        if (storedItems.hasOwnProperty(item)) {
            storedItems[item] += quantity;
        } else {
            storedItems[item] = quantity;
        }
    }
    
    for (let item in storedItems) {
        console.log(`${item} -> ${storedItems[item]}`);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);

storage([
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);
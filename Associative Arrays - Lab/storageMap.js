function storage(arr) {

    let storageObj = new Map();

    arr.forEach(el => {
        let [item, quantity] = el.split(' ');
        if (storageObj.has(item)) {
            let oldValue = storageObj.get(item);
            storageObj.set(item, Number(oldValue) + Number(quantity));
        } else {
            storageObj.set(item, quantity);
        }
    });
    
    for (let item of storageObj) {
        let curItem = item[0];
        let curQuantity = item[1];
        console.log(`${curItem} -> ${curQuantity}`);
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
    'coffee 40']);
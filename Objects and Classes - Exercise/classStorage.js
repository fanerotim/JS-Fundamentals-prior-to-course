class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    get totalCost() {        
        // return this.storage.reduce((acc, el) => {
        //     return acc + el.price * el.quantity
        // }, 0);
        let total = 0;
        for (let el of this.storage) {
            total += el.price * el.quantity;
        }
        return total;
    }

    addProduct(input) {
        this.storage.push(input);
        this.capacity -= input.quantity;
        return;
    }

    getProducts() {
        let finalResult = [];
        this.storage.forEach(obj => {
            finalResult.push(JSON.stringify(obj))
        })
        return finalResult.join('\n');
    }
}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };

let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);


// let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
// let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
// let storage = new Storage(30);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// console.log(storage.totalCost);
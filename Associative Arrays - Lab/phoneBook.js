function phoneBook(arr) {

    let result = {};
    
    for (let el of arr) {
        let [name, phone] = el.split(' ');

        if (result.hasOwnProperty(name)) {
            result[name] = phone;
        }
        result[name] = phone;
    }
    
    for (let name in result) {
        console.log(`${name} -> ${result[name]}`);
    }
}

// phoneBook([
//     'Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344']);

phoneBook([
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);
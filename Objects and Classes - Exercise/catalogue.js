function catalogue(arr) {

    let result = [];
    
    arr.forEach(el => {
        let [name, price] = el.split(' : ');

        let obj = {
            name,
            price,
        }
        result.push(obj)
    });

    result.sort((a, b) => a.name.localeCompare(b.name));

    let firstLetter = result[0].name[0];

    for (let i = 0; i < result.length; i++) {
        let nextLetter = result[i].name[0];
        if (i === 0) {
            console.log(firstLetter);
        }    
        if (nextLetter !== firstLetter) {
            console.log(nextLetter);
            firstLetter = nextLetter;
        }
        console.log(`  ${result[i].name}: ${result[i].price}`) 
    }
}

// catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
//     ]);

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ])
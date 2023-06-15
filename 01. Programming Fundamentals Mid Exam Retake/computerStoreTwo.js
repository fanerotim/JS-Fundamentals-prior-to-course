function computerStore(arr) {

    let index = 0;
    let command = arr[index];
    let total = 0;
    let tax = 0;

    while (command !== 'special' && command !== 'regular') {
        command = Number(arr[index]);

        if (command < 0) {
            console.log("Invalid price!");
        } else {
            tax += command * 0.20;
            total += command;
        }

        index++;
        command = arr[index];
    }

    if (total > 0) {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${total.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log("-----------")
        if (command === 'regular') {
            console.log(`Total price: ${(total + tax).toFixed(2)}$`)
        } else if (command === 'special') {
            let discountedPrice = ((total + tax) * 0.90).toFixed(2);
            console.log(`Total price: ${discountedPrice}$`)
        }
    } else {
        console.log("Invalid order!");
    }
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special']);

// computerStore([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30',
//     'regular'
// ])

// computerStore([
//     'regular'
// ])



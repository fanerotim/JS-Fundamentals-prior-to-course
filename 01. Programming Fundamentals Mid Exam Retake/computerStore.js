function computerStore(arr) {

    let index = 0;
    let command = arr[index];

    let priceWithoutTax = 0;
    let taxes = 0;
    let totalPrice = 0;

    while (command !== 'regular' && command !== 'special') {
        command = Number(command);

        if (command < 0) {
            console.log("Invalid price!");
            index++;
            command = arr[index];
            continue;
        }

        priceWithoutTax += command;
        taxes += command * 0.20;
        index++;
        command = arr[index];
    }

    totalPrice = priceWithoutTax + taxes;

    if (totalPrice === 0) {
        console.log('Invalid order!');
        return;
    }

    if (command === 'special') {
        totalPrice -= totalPrice * 0.10;
    }

    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}

// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ])

// computerStore([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30', 'regular'
// ])

computerStore([
    'regular'
    ])



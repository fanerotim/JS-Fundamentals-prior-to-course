function furniture(arr) {

    let index = 0;
    let command = arr[index];

    let pattern = />>[A-Z][A-Za-z]+<<\d+[.]?\d*!{1}\d+/g;

    console.log('Bought furniture:')
    let finalCost = 0;

    while (command !== 'Purchase') {
        if (command.match(pattern)) {
            command = command.replace('>>', '').replace('<<', ' ').replace('!', ' ');
            let [item, price, quantity] = command.split(' ');
            quantity = Math.floor(quantity);
            finalCost += Number(price) * Number(quantity);
            console.log(item);
        }
        index++;
        command = arr[index];
    }
    console.log(`Total money spend: ${finalCost.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);

// furniture(['>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase']);

// furniture(['>Invalid<<!4',
//     '>Invalid<<!2',
//     '>Invalid<<!5',
//     'Purchase'])
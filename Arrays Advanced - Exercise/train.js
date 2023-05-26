function train(arr) {

    let totalWagons = arr.shift().split(' ');
    let maxCapacity = Number(arr.shift());

    for (el in arr) {
        let command = arr[el].split(' ');
        
        if (command[0] === 'Add') {
            totalWagons.push(command[1]);
        } else {
            for (passenger of totalWagons) {
                if (Number(command) + Number(passenger) <= maxCapacity) {
                    totalWagons[totalWagons.indexOf(passenger)] = Number(command) + Number(passenger);
                    break;
                }
            }
        }
    }
    console.log(totalWagons.join(' '));
}

train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);
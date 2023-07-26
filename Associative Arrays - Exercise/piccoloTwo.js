function solve(arr) {

    let garage = {};

    for (let line of arr) {
        let [direction, plate] = line.split(', ');
        
        switch(direction) {
            case 'IN':
                garage[plate] = plate;
                break;
            case 'OUT':
                delete garage[plate];
                break;
        }
    }
    garage = Object.entries(garage).sort((a, b) => a[0].localeCompare(b[0]));
    
    if (garage.length !== 0) {
        garage.forEach(el => {
            console.log(el[0]);
        });
    } else {
        console.log(`Parking Lot is Empty`);
    }
}

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
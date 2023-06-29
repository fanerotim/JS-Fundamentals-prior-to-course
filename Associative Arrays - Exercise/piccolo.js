function piccolo(arr) {

    let plates = {};

    for (let i = 0; i < arr.length; i++)  {
        let [direction, plate] = arr[i].split(', ');
        plate = plate;

        switch(direction) {
            case 'IN':
                plates[plate] = plate;
                break;
            case 'OUT':
                if (plates.hasOwnProperty(plate)) {
                    delete plates[plate];
                }
                break;
        }
    } 
    plates = Object.entries(plates).sort((plateA, plateB) => plateA[0].localeCompare(plateB[0])); 
    
    if (plates.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        plates.forEach(plate => {
            console.log(plate[0]);
        });
    }
}

piccolo([
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

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])
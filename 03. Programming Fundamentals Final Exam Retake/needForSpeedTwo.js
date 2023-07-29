function solve(arr) {

    let carCount = Number(arr.shift());
    let carPark = {};

    for (let i = 0; i < carCount; i++) {
        let line = arr.shift();
        let [car, mileage, fuel] = line.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        carPark[car] = [mileage, fuel];
    }

    let command = arr.shift();

    while (command !== 'Stop') {
        command = command.split(' : ');
        let action = command.shift();
        let curCar = command.shift();
        let fuel;

        switch (action) {
            case 'Drive':
                let distance = Number(command.shift());
                fuel = Number(command.shift());

                if (carPark[curCar][1] < fuel) {
                    console.log("Not enough fuel to make that ride");
                    break;
                }

                carPark[curCar][0] += distance;
                carPark[curCar][1] -= fuel;
                console.log(`${curCar} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (carPark[curCar][0] >= 100000) {
                    delete carPark[curCar];
                    console.log(`Time to sell the ${curCar}!`)
                }

                break;
            case 'Refuel':
                fuel = Number(command.shift());

                if (carPark[curCar][1] + fuel >= 75) {
                    console.log(`${curCar} refueled with ${75 - carPark[curCar][1]} liters`);
                    carPark[curCar][1] = 75;
                } else {
                    console.log(`${curCar} refueled with ${fuel} liters`);
                    carPark[curCar][1] += fuel;
                }

                break;
            case 'Revert':
                let kilometers = Number(command.shift());

                carPark[curCar][0] -= kilometers;
                if (carPark[curCar][0] < 10000) {
                    carPark[curCar][0] = 10000;
                    break;
                }
                console.log(`${curCar} mileage decreased by ${kilometers} kilometers`);
                break;
        }
        command = arr.shift();
    }

    for (let car in carPark) {
        console.log(`${car} -> Mileage: ${carPark[car][0]} kms, Fuel in the tank: ${carPark[car][1]} lt.`)
    }
}

// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);
function needForSpeed(arr) {

    let numberOfCars = Number(arr.shift());
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let car = arr.shift();
        let [model, mileage, fuel] = car.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        cars[model] = [mileage, fuel];
    }

    let index = 0;
    let command = arr[index];

    while (command !== 'Stop') {
        command = command.split(' : ');
        let action = command.shift();
        let currentCar = '';
        let fuel = '';

        switch(action) {
            case 'Drive':
                currentCar = command.shift();
                let distance = Number(command.shift());
                fuel = Number(command.shift());

                if (cars[currentCar][1] >= fuel) {
                    console.log(`${currentCar} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    cars[currentCar][1] -= fuel;
                    cars[currentCar][0] += distance;
                } else {
                    console.log("Not enough fuel to make that ride");
                }

                if (cars[currentCar][0] >= 100000) {
                    delete cars[currentCar];
                    console.log(`Time to sell the ${currentCar}!`)
                }
                
                break;
            case 'Refuel':
                currentCar = command.shift();
                fuel = Number(command.shift());

                if (cars[currentCar][1] + fuel >= 75) {
                    let usedFuel = 75 - cars[currentCar][1];
                    cars[currentCar][1] = 75;
                    console.log(`${currentCar} refueled with ${usedFuel} liters`);
                } else {
                    console.log(`${currentCar} refueled with ${fuel} liters`);
                    cars[currentCar][1] += fuel;
                }
                break;
            case 'Revert':
                currentCar = command.shift();
                let kilometers = Number(command.shift());

                cars[currentCar][0] -= kilometers;

                if (cars[currentCar][0] >= 10000) {
                    console.log(`${currentCar} mileage decreased by ${kilometers} kilometers`)
                } else {
                    cars[currentCar][0] = 10000;
                }
                break;
        }
        index++;
        command = arr[index];
    }

    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car][0]} kms, Fuel in the tank: ${cars[car][1]} lt.`);
    }
}

// needForSpeed([
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
//   ]);

needForSpeed([
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
  ])
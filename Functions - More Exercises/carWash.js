function carWash(arr) {

    let percentageCleanedCar = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i];

        switch (currentCommand) {
            case 'soap':
                percentageCleanedCar += 10;
                break;
            case 'water':
                percentageCleanedCar += percentageCleanedCar * 0.2;
                break;
            case 'vacuum cleaner':
                percentageCleanedCar += percentageCleanedCar * 0.25;
                break;
            case 'mud':
                percentageCleanedCar -= percentageCleanedCar * 0.1;
                break;
        }
    }
    console.log(`The car is ${percentageCleanedCar.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
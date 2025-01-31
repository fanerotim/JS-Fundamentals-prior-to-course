function solve(number: number[]) {

    const targetValue = number[0];

    for (let i = 1; i < number.length; i++) {
        let currentCrystal = Math.floor(number[i]);

        console.log(`Processing chunk ${currentCrystal} microns`)

        while (currentCrystal !== targetValue) {

            let xRayCounter = 0;

            // cut: print how many times you cut (in 4) the crystal
            if (currentCrystal / 4 >= targetValue) {

                let numberOfCuts = 0;

                while (currentCrystal / 4 >= targetValue) {
                    currentCrystal /= 4;
                    numberOfCuts++;
                }

                if ((currentCrystal + 1) / 4 >= targetValue && xRayCounter === 0) {
                    numberOfCuts++;
                    currentCrystal++;
                    currentCrystal /= 4;
                    xRayCounter++;
                }
                console.log(`Cut x${numberOfCuts}`);
            } else if (currentCrystal - (currentCrystal * 0.2) >= targetValue) {
                //lap: print how many times you remove 20% of crystal thickness
                let numberOfLaps = 0;

                while (currentCrystal - (currentCrystal * 0.2) >= targetValue) {
                    currentCrystal -= currentCrystal * 0.2;
                    numberOfLaps++;
                }

                if ((currentCrystal + 1) - (currentCrystal * 0.2) >= targetValue && xRayCounter === 0) {
                    currentCrystal++;
                    numberOfLaps++;
                    currentCrystal -= currentCrystal * 0.2;
                    xRayCounter++;
                }

                console.log(`Lap x${numberOfLaps}`)
            } else if (currentCrystal - 20 >= targetValue) {
                //grind: print how many times you removed 20 microns from the crystal's thickness
                let numberOfGrinds = 0;

                while (currentCrystal - 20 >= targetValue) {
                    currentCrystal -= 20;
                    numberOfGrinds++;
                }

                if ((currentCrystal + 1) - 20 >= targetValue && xRayCounter === 0) {
                    currentCrystal++;
                    currentCrystal -= 20;
                    numberOfGrinds++;
                    xRayCounter++;
                }

                console.log(`Grind x${numberOfGrinds}`);
            } else if (currentCrystal - 2 >= targetValue) {
                //etch: print how many times you remove 2 microns from the crystal's thickness
                let numberOfEtches = 0;

                while (currentCrystal - 2 >= targetValue) {
                    currentCrystal -= 2;
                    numberOfEtches++;
                }

                if ((currentCrystal + 1) - 2 >= targetValue && xRayCounter === 0) {
                    currentCrystal++;
                    currentCrystal -= 2;
                    xRayCounter++;
                    numberOfEtches++;
                }

                console.log(`Etch x${numberOfEtches}`);
            }

            currentCrystal = Math.floor(currentCrystal);
            console.log('Transporting and washing')

            if (xRayCounter === 1) {
                console.log('X-ray x1')
            }
        }
        console.log(`Finished crystal ${currentCrystal} microns`);
    }

}

// solve([1375, 50000]);
solve([1000, 4000, 8100])
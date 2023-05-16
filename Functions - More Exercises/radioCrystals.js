function radioCrystals(arr) {

    let goalThickness = arr[0];

    let index = 1;
    let currentCrystal = arr[index];

    console.log(`Processing chunk ${currentCrystal} microns`);

    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;
    let xRayCounter = 0;

    while (index <= arr.length - 1) {

        if (currentCrystal < goalThickness) {
            xRayCounter++;
            currentCrystal += 1;
            currentCrystal = Math.floor(currentCrystal);
            console.log(`X-ray x${xRayCounter}`)
        }

        for (let i = currentCrystal; i > goalThickness; i++) {

            if (currentCrystal / 4 >= goalThickness) {
                currentCrystal = currentCrystal / 4;
                currentCrystal = Math.floor(currentCrystal);
                cutCounter++;

                if (currentCrystal / 4 <= goalThickness) {
                    console.log(`Cut x${cutCounter}`);
                    console.log(`Transporting and washing`)
                }

            } else if (currentCrystal - currentCrystal * 0.20 >= goalThickness) {
                currentCrystal -= currentCrystal * 0.20;
                currentCrystal = Math.floor(currentCrystal);
                lapCounter++;

                if (currentCrystal - currentCrystal * 0.20 <= goalThickness) {
                    console.log(`Lap x${lapCounter}`);
                    console.log(`Transporting and washing`)
                }

            } else if (currentCrystal - 20 >= goalThickness) {
                currentCrystal -= 20;
                currentCrystal = Math.floor(currentCrystal);
                grindCounter++;

                if (currentCrystal - 20 <= goalThickness) {
                    console.log(`Grind x${grindCounter}`);
                    console.log(`Transporting and washing`)
                }

            } else if ((currentCrystal - 2 >= goalThickness) || (currentCrystal - 2 + 1 === goalThickness)) {
                etchCounter++;
                currentCrystal -= 2;

                if (currentCrystal === goalThickness || (currentCrystal + 1 === goalThickness)) {
                    console.log(`Etch x${etchCounter}`);
                    console.log(`Transporting and washing`)
                }

            } else if (currentCrystal + 1 === goalThickness) {
                xRayCounter++;
                currentCrystal += 1;
                currentCrystal = Math.floor(currentCrystal);
                console.log(`X-ray x${xRayCounter}`)
            }

            if (currentCrystal === goalThickness) {
                break;
            }
        }

        if (currentCrystal === goalThickness) {

            console.log(`Finished crystal ${currentCrystal} microns`);

            cutCounter = 0;
            lapCounter = 0;
            grindCounter = 0;
            etchCounter = 0;
            xRayCounter = 0;

            index++;
            currentCrystal = arr[index];

            if (index < arr.length) {
                console.log(`Processing chunk ${currentCrystal} microns`);
            }
        }
    }
}

// radioCrystals([1375, 50000]);
radioCrystals([10, 9]);
// radioCrystals([2, 22]);
function plantDiscovery(arr) {

    let plantsCount = Number(arr.shift());
    let plants = {};
    let ratings = {};

    for (let i = 0; i < plantsCount; i++) {
        let currentCommand = arr.shift();
        let [curPlant, rarity] = currentCommand.split('<->');
        plants[curPlant] = Number(rarity);
    }

    let index = 0;
    let command = arr[index];

    while (command !== 'Exhibition') {

        command = command.split(': ');
        let action = command.shift();
        command = command.join('');
        let [plant, newRarity] = command.split(' - ');
        newRarity = Number(newRarity);

        if (!plants.hasOwnProperty(plant)) {
            console.log('error');
            index++;
            command = arr[index];
            continue;
        }

        switch (action) {
            case 'Rate':

                if (!ratings.hasOwnProperty(plant)) {
                    ratings[plant] = [newRarity];
                } else {
                    ratings[plant].push(newRarity);
                }

                break;
            case 'Update':
                plants[plant] = newRarity;
                break;
            case 'Reset':
                ratings[plant] = [];
                break;
        }
        index++;
        command = arr[index];
    }
    console.log("Plants for the exhibition:");

    let results = {};

    for (let key in ratings) {
        let sumOfCurRatings = 0;
        let numberOfPlants = 0;
        for (let rating of ratings[key]) {
            sumOfCurRatings += rating;
            numberOfPlants = ratings[key].length;
        }

        if (numberOfPlants > 0) {
            results[key] = (sumOfCurRatings / numberOfPlants).toFixed(2);
        } else {
            let zero = 0;
            results[key] = zero.toFixed(2);
        }
    }

    for (let plantToPrint in plants) {
        if (results[plantToPrint] !== undefined) {
            console.log(`- ${plantToPrint}; Rarity: ${plants[plantToPrint]}; Rating: ${results[plantToPrint]}`);
        } else {
            console.log(`- ${plantToPrint}; Rarity: ${plants[plantToPrint]}; Rating: ${(0).toFixed(2)}`);
        }
    }
}

// plantDiscovery([
//     "3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"]);

plantDiscovery([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Pesho - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);


function solve(arr) {

    let plantsCount = arr.shift();
    let plants = {};

    for (let i = 0; i < plantsCount; i++) {
        let line = arr.shift();
        let [plant, rarity] = line.split('<->');

        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = [rarity];
            continue;
        }
        plants[plant] = rarity;
    }

    let command = arr.shift();

    while (command !== 'Exhibition') {
        command = command.split(': ');
        let action = command.shift();
        command = command.join('').split(' - ');
        let plant = command.shift();

        if (!plants.hasOwnProperty(plant)) {
            console.log('error');
            command = arr.shift();
            continue;
        }

        switch (action) {
            case 'Rate':
                let rating = Number(command.shift());
                plants[plant].push(rating);
                break;
            case 'Update':
                let rarity = Number(command.shift());
                plants[plant][0] = rarity;
                break;
            case 'Reset':
                let savedRarity = plants[plant].shift();
                plants[plant] = [];
                plants[plant].push(savedRarity);
                break;
        }
        command = arr.shift();
    }

    console.log('Plants for the exhibition:');
    for (let key in plants) {
        let curRarity = plants[key].shift();
        let totalRating = 0;
        for (let rating of plants[key]) {
            totalRating += Number(rating);
        }
        let averageRating = 0;

        if (plants[key].length > 0) {
            averageRating = (totalRating / plants[key].length);
        }
        console.log(`- ${key}; Rarity: ${curRarity}; Rating: ${averageRating.toFixed(2)}`)
    }
}

// solve([
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

solve([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);


function solve(arr) {

    let command = arr.shift();
    let cities = {};

    while (command !== 'Sail') {
        let [city, population, gold] = command.split('||')
        population = Number(population);
        gold = Number(gold);

        if (!cities.hasOwnProperty(city)) {
            cities[city] = [population, gold];
        } else {
            cities[city][0] += population;
            cities[city][1] += gold;
        }
        command = arr.shift();
    }

    let secondCommand = arr.shift();

    while (secondCommand !== 'End') {
        secondCommand = secondCommand.split('=>');
        let action = secondCommand.shift();
        let town = secondCommand.shift();
        let gold;
        switch (action) {
            case 'Plunder':
                let people = Number(secondCommand.shift());
                gold = Number(secondCommand.shift());

                cities[town][0] -= people;
                cities[town][1] -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if (cities[town][0] <= 0 || cities[town][1] <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    delete cities[town];
                }

                break;
            case 'Prosper':
                gold = Number(secondCommand.shift());

                if (gold < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                    break;
                }
                cities[town][1] += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town][1]} gold.`)
                break;
        }
        secondCommand = arr.shift();
    }
    let citiesLength = Object.entries(cities).length;
    
    if (citiesLength > 0) {
        console.log(`Ahoy, Captain! There are ${citiesLength} wealthy settlements to go to:`);
        for (let city in cities) {
            console.log(`${city} -> Population: ${cities[city][0]} citizens, Gold: ${cities[city][1]} kg`)
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

// solve([
//     "Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"]);

solve([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);


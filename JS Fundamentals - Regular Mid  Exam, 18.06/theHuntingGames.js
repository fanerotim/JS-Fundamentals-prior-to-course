function huntingGames(arr) {

    let daysOfAdventure = Number(arr.shift());
    let playersCount = Number(arr.shift());
    let groupEnergy = Number(arr.shift());
    let waterPerDayPerPerson = Number(arr.shift());
    let foodPerDayPerPerson = Number(arr.shift());
    
    let totalWaterNeeded = daysOfAdventure * playersCount * waterPerDayPerPerson;
    let totalFoodNeeded = daysOfAdventure * playersCount * foodPerDayPerPerson;
    let daysCounter = 0;
    let willFinish = false;

    for (let i = 0; i < arr.length; i++) {
        let currentEnergy = Number(arr[i]);
        daysCounter++;
        
        if (groupEnergy - currentEnergy <= 0) {
            willFinish = true;
            break;
        } else {
            groupEnergy -= currentEnergy;
        }

        if (daysCounter % 2 === 0) {
            groupEnergy += groupEnergy * 0.05;
            totalWaterNeeded -= totalWaterNeeded * 0.30;        
        }

        if (daysCounter % 3 === 0) {
            let eatenFood = totalFoodNeeded / playersCount;
            totalFoodNeeded -= eatenFood;
            groupEnergy += groupEnergy * 0.10;
        }
    }

    if (willFinish === false) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFoodNeeded.toFixed(2)} food and ${totalWaterNeeded.toFixed(2)} water.`)
    }
}

huntingGames([
    "10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]);

huntingGames([
    "12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"]);


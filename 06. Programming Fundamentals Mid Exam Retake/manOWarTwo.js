function manOWar(arr) {

    let pirateShip = arr.shift().split('>').map(a => Number(a));
    let warship = arr.shift().split('>').map(a => Number(a));
    let maxHealth = Number(arr.shift());

    let elementIndex = 0;
    let command = arr[elementIndex];
    let dueRepairCount = 0;

    while (command !== "Retire") {
        command = command.split(' ');
        let action = command.shift();
        let index = Number(command.shift());
        let isValid = index >= 0 && index < warship.length;

        switch(action) {
            case "Fire":
                if (isValid) {
                    let damage = Number(command.shift());
                    warship[index] -= damage;
                    if (warship[index] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;
            case "Defend":
                let endIndex = Number(command.shift());
                isValid = (index >= 0 && index < pirateShip.length) &&
                (endIndex >= 0 && endIndex < pirateShip.length);
                let warshipDamage = Number(command.shift());

                if (isValid) {
                    for (let i = index; i <= endIndex; i++) {
                        pirateShip[i] -= warshipDamage;

                        if (pirateShip[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
                break;
            case "Repair":
                isValid = index >= 0 && index < pirateShip.length;
                if (isValid) {
                    let health = Number(command.shift());
                    pirateShip[index] += health;
                    if (pirateShip[index] > maxHealth) {
                        pirateShip[index] = maxHealth;
                    }
                }
                break;
            case "Status":
                let healthPercentage = maxHealth * 0.20;
                for (num of pirateShip) {
                    if (num < healthPercentage) {
                        dueRepairCount++;
                    }
                }
                console.log(`${dueRepairCount} sections need repair.`)
                dueRepairCount = 0;
                break;
        }
        elementIndex++;
        command = arr[elementIndex];
    }
    let pirateShipSum = 0;
    for (num of pirateShip) {
        pirateShipSum += num;
    }

    let warshipSum = 0;
    for (el of warship) {
        warshipSum += el;
    }
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`)
}

manOWar([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    'Status',
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);


// manOWar([
//     "2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"]);


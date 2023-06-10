function manOWar(arr) {

    let pirateShip = arr.shift().split('>');
    let warship = arr.shift().split('>');
    pirateShip = pirateShip.map(a => Number(a));
    warship = warship.map(a => Number(a));
    let maximumHealth = Number(arr.shift());

    let index = 0;
    let command = arr[index];
    let startIndex = '';
    let endIndex = '';
    let healthOrDamage = '';
    let minHealth = maximumHealth * 0.2;
    let minHealthSection = 0;
    let isFinished = false;

    while (command !== 'Retire') {
        command = command.split(' ');
        let action = command.shift();
        startIndex = Number(command.shift());

        switch (action) {
            case 'Fire':
                fire(command);
                break;
            case 'Defend':
                defend(command);
                break;
            case 'Repair':
                repair(command);
                break;
            case 'Status':
                status(command);
                break;
        }

        if (isFinished) {
            return;
        }
        
        index++;
        command = arr[index];
    }

    function fire(command) {
        healthOrDamage = Number(command.shift());
        if (startIndex >= 0 && startIndex < warship.length) {
            warship[startIndex] -= healthOrDamage;

            if (warship[startIndex] <= 0) {
                console.log("You won! The enemy ship has sunken.");
                isFinished = true;
                return;
            }
        }
    }

    function defend(command) {
        endIndex = Number(command.shift());
        healthOrDamage = Number(command.shift());

        if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= startIndex && endIndex < pirateShip.length)) {
            for (let section = startIndex; section <= endIndex; section++) {
                pirateShip[section] -= healthOrDamage;

                if (pirateShip[section] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    isFinished = true;
                    return;
                }
            }
        }
    }

    function repair(command) {
        healthOrDamage = Number(command.shift());

        if (startIndex >= 0 && startIndex < pirateShip.length) {
            pirateShip[startIndex] += healthOrDamage;

            if (pirateShip[startIndex] > maximumHealth) {
                pirateShip[startIndex] = maximumHealth;
            }
        }
    }

    function status(command) {
        for (sec of pirateShip) {
            if (sec < minHealth) {
                minHealthSection++;
            }
        }
        console.log(`${minHealthSection} sections need repair.`);
        minHealthSection = 0;
    }

    let pirateShipStatus = 0;
    let warshipStatus = 0;

    for (let el of pirateShip) {
        pirateShipStatus += el;
    }

    for (let num of warship) {
        warshipStatus += num;
    }

    if (!isFinished) {
        console.log(`Pirate ship status: ${pirateShipStatus}`);
        console.log(`Warship status: ${warshipStatus}`);
    }
}

// manOWar([
//     "12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"]);

// manOWar(["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"])

manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Status",
    "Defend 0 4 11",
    "Repair 3 18",
    "Status",
    "Retire"])


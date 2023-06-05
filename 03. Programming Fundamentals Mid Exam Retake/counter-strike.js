function counterStrike(arr) {

    let energy = Number(arr.shift());
    let index = 0;
    let command = arr[index];
    let counter = 0;

    while (command !== 'End of battle') {
        command = Number(command);

        if (energy < command) {
            break;
        } else {
            energy -= command;
            counter++;
        }

        if (counter % 3 === 0) {
            energy += counter;
        }
        index++;
        command = arr[index];
    }

    if (energy <= command) {
        console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`)
    } else {
        console.log(`Won battles: ${counter}. Energy left: ${energy}`)
    }
}

// counterStrike([
//     "100",
//     "10",
//     "10",
//     "10",
//     "1",
//     "2",
//     "3",
//     "73",
//     "10"]);

// counterStrike([
//     "200",
//     "54",
//     "14",
//     "28",
//     "13",
//     "End of battle"])

counterStrike([
    "200",
    "130",
    "140",
    "28",
    "13",
    "End of battle"])


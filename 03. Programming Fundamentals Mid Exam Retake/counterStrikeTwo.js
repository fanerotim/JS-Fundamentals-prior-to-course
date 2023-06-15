function counterStrike(arr) {

    let energy = Number(arr.shift());

    let index = 0;
    let command = arr[index];
    let battlesWon = 0;

    while (command !== "End of battle") {
        command = Number(command);

        if (energy >= command) {
            energy -= command;
            battlesWon++;
            if (battlesWon % 3 === 0) {
                energy += battlesWon;
            }   
        } else {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            return;
        }
        index++;
        command = arr[index];
    }
    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`)
}

counterStrike([
    "100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);

counterStrike([
    "200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);


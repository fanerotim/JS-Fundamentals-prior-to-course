function dungeonestDark(arr) {

    let health = 100;
    let coins = 0;
    let roomCount = 0;
    let dungeonRooms = arr.toString().split('|');

    for (let i = 0; i < dungeonRooms.length; i++) {
        let currentRoom = dungeonRooms[i].split(' ');
        let command = currentRoom.shift();
        let number = Number(currentRoom.shift());
        roomCount++;

        switch (command) {
            case "potion":
                if (health < 100) {
                    if (health + number >= 100) {
                        console.log(`You healed for ${100 - health} hp.`)
                        health = 100;
                    } else {
                        console.log(`You healed for ${number} hp.`)
                        health += number;
                    }
                }
                console.log(`Current health: ${health} hp.`)
                break;
            case "chest":
                coins += number;
                console.log(`You found ${number} coins.`)
                break;
            default:
                health -= number;

                if (health > 0) {
                    console.log(`You slayed ${command}.`)
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCount}`)
                    return;
                }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`)
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
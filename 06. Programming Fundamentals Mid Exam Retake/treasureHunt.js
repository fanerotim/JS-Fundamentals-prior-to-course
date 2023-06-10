function treasureHunt(arr) {

    let treasureChest = arr.shift().split("|");
    let index = 0;
    let command = arr[index];
    let stolenItems = [];

    while (command !== "Yohoho!") {
        command = command.split(" ");
        let action = command.shift();

        switch (action) {
            case "Loot":
                loot(command);
                break;
            case "Drop":
                drop(command);
                break;
            case "Steal":
                steal(command);
                break;
        }
        index++;
        command = arr[index];
    }

    function loot(command) {
        for (el of command) {
            if (!treasureChest.includes(el)) {
                treasureChest.unshift(el);
            }
        }
    }

    function drop(command) {
        let position = Number(command.shift());
        if (position < treasureChest.length && position >= 0) {
            let droppedItem = treasureChest.splice(position, 1);
            droppedItem = droppedItem.join('');
            treasureChest.push(droppedItem);
        }
    }

    function steal(command) {
        let stealCount = Number(command.shift());
        if (treasureChest.length >= stealCount) {
            stolenItems = treasureChest.splice(treasureChest.length - stealCount);
        } else {
            stolenItems = treasureChest.splice(0);
        }

        console.log(stolenItems.join(", "));
        stolenItems = [];
    }

    let sum = 0;
    for (let item of treasureChest) {
        sum += item.length;
    }

    if (treasureChest.length !== 0) {
        console.log(`Average treasure gain: ${(sum / treasureChest.length).toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.")
    }
}


treasureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Loot Armor Sword Spear",
    "Yohoho!"]);


// treasureHunt([
//     "Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"]);

// treasureHunt([
//     "Diamonds",
//     "Steal 150",
//     "Yohoho!"]);




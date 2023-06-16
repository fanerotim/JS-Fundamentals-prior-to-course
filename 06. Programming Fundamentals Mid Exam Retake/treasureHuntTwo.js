function treasureHunt(arr) {

    let initialLoot = arr.shift().split('|');
    
    let index = 0;
    let command = arr[index];
    let stolenItems;

    while (command !== "Yohoho!") {
        command = command.split(' ');
        let action = command.shift();
        
        switch(action) {
            case "Loot":
                command.map(a => {
                    if (!initialLoot.includes(a)) {
                        return initialLoot.unshift(a);
                    }
                })
                break;
            case "Drop":
                let index = Number(command.shift());
                if (index >= 0 && index < initialLoot.length) {
                    let removedItem = initialLoot.splice(index, 1);
                    initialLoot.push(removedItem);
                }
                break;
            case "Steal":
                let count = Number(command.shift());
                if (count < initialLoot.length) {
                    stolenItems = initialLoot.splice(initialLoot.length - count);   
                } else {
                    stolenItems = initialLoot.slice(0);
                    initialLoot = [];
                }
                console.log(stolenItems.join(', '))
                break;
        }
        index++;
        command = arr[index];
    }
    let totalSum = 0;
    let itemsCounter = 0;
    for (let i = 0; i < initialLoot.length; i++) {
        totalSum += initialLoot[i].length;
        itemsCounter++;
    }

    if (totalSum !== 0) {
        console.log(`Average treasure gain: ${(totalSum / itemsCounter).toFixed(2)} pirate credits.`)
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
    "Yohoho!"]);

treasureHunt([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);


function dungeonestDark(arr) {

    let arrAsStr = arr[0]
    let currentElement = 0;
    let actionName = '';
    let points = '';
    let health = 100;
    let coins = 0;
    let counter = 0;
    let isDead = false;
    let elementCounter = 0;

    for (let i = 0; i < arrAsStr.length; i++) {
        currentElement = arrAsStr[i];
        elementCounter++;

        if (currentElement !== " " && currentElement !== "|" && currentElement !== "0" && currentElement !== "1" && currentElement !== "2" && currentElement !== "3" && currentElement !== "4" && currentElement !== "5"
        && currentElement !== "6" && currentElement !== "7" && currentElement !== "8" && currentElement !== "9") {
            actionName += currentElement;
        } else if (currentElement === " ") {
            continue;
        } else if (currentElement === "0" || currentElement === "1" || currentElement === "2" || currentElement === "3" || currentElement === "4" || currentElement === "5"
        || currentElement === "6" || currentElement === "7" || currentElement === "8" || currentElement === "9") {
            points += currentElement;
        }

        if (currentElement === "|" || elementCounter === arrAsStr.length) {
            counter++;
            if (actionName === "potion") {
                points = Number(points);
                if (health + points <= 100) {
                    health += points;
                    console.log(`You healed for ${points} hp.`);
                    console.log(`Current health: ${health} hp.`)
                } else if (health + points > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                }
            } else if (actionName === "chest") {
                console.log(`You found ${points} coins.`);
                coins += Number(points); 
            } else if (actionName !== "potion" && actionName !== "chest") {
                health -= Number(points);
                if (health > 0) {
                    console.log(`You slayed ${actionName}.`);
                } else {
                    isDead = true;
                    console.log(`You died! Killed by ${actionName}.`)
                    console.log(`Best room: ${counter}`);
                    return;
                }
            }
            actionName = '';
            points = '';
        }   
    }

    if (isDead === false) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`)
    }
}

dungeonestDark(['rat', 10,'|','bat', 20,'|','potion', 10,'|','rat', 10,'|','chest', 100,'|','boss', 70,'|','chest', 1000])
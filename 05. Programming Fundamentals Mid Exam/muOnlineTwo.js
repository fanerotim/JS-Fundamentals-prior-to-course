function muOnline(arr) {

    let resultArr = arr.split('|');
    let health = 100;  
    let bitcoins = 0;  
    let roomCounter = 0;

    for (let i = 0; i < resultArr.length; i++) {
        let command = resultArr[i].split(' ');
        let curCommand = command.shift();
        let number = Number(command.shift());
        roomCounter++;

        switch(curCommand) {
            case "potion":
                if (health < 100) {
                    if (health + number >= 100) {
                        console.log(`You healed for ${100 - health} hp.`);
                        health = 100;
                    } else {
                        console.log(`You healed for ${number} hp.`);
                        health += number;
                    }
                    
                    console.log(`Current health: ${health} hp.`);
                }
                continue;
            case "chest":
                console.log(`You found ${number} bitcoins.`);
                bitcoins += number;
                continue;
        }
        health -= number;

        if (health > 0) {
            console.log(`You slayed ${curCommand}.`);
        } else {
            console.log(`You died! Killed by ${curCommand}.`);
            console.log(`Best room: ${roomCounter}`);
            return;
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`)
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
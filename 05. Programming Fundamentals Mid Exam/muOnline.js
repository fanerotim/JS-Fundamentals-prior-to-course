function muOnline(input) {

    let arr = input.split("|");
    let health = 100;
    let bitcoins = 0;

    for (let i = 0; i < arr.length; i++) {
        let curCommand = arr[i].split(" ");
        let command = curCommand.shift();
        let num = Number(curCommand.shift());

        switch (command) {
            case "potion":
                potion(num);
                continue;
            case "chest":
                chest(num);
                continue;
        }

        health -= num;

        if (health > 0) {
            console.log(`You slayed ${command}.`)
        } else {
            console.log(`You died! Killed by ${command}.`)
            console.log(`Best room: ${i + 1}`);
            return;
        }
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`)
    }

    function potion(num) {
        if (health < 100) {
            if (health + num > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                health += num;
                console.log(`You healed for ${num} hp.`);
            }
        }
        console.log(`Current health: ${health} hp.`)
    }

    function chest(num) {
        console.log(`You found ${num} bitcoins.`);
        bitcoins += num;
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
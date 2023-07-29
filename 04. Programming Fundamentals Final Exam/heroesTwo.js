function solve(arr) {

    let heroesCount = Number(arr.shift());
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let line = arr.shift();
        let [hero, hp, mp] = line.split(' ');
        hp = Number(hp);
        mp = Number(mp);
        heroes[hero] = [hp, mp];
    } 
    
    let command = arr.shift();

    while (command !== 'End') {
        command = command.split(' - ');
        let action = command.shift();
        let heroName = command.shift();
        let amount;

        switch(action) {
            case 'CastSpell':
                let neededMp = Number(command.shift());
                let spellName = command.shift();

                if (heroes[heroName][1] >= neededMp) {
                    heroes[heroName][1] -= neededMp;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName][1]} MP!`) 
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
                }
                break;
            case 'TakeDamage':
                let damage = Number(command.shift());
                let attacker = command.shift();
                heroes[heroName][0] -= damage;

                if (heroes[heroName][0] > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName][0]} HP left!`);
                } else {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete heroes[heroName];
                }
                break;
            case 'Recharge':
                amount = Number(command.shift());

                if (heroes[heroName][1] + amount > 200) {
                    console.log(`${heroName} recharged for ${200 - heroes[heroName][1]} MP!`);
                    heroes[heroName][1] = 200;
                } else {
                    heroes[heroName][1] += amount;
                    console.log(`${heroName} recharged for ${amount} MP!`);
                }
                break;
            case 'Heal':
                amount = Number(command.shift());

                if (heroes[heroName][0] + amount > 100) {
                   console.log(`${heroName} healed for ${100 - heroes[heroName][0]} HP!`) ;
                   heroes[heroName][0] = 100;
                } else {
                    heroes[heroName][0] += amount;
                    console.log(`${heroName} healed for ${amount} HP!`)
                }
                break;
        }
        command = arr.shift();
    }
    for (let key in heroes) {
        console.log(key);
        console.log(`  HP: ${heroes[key][0]}`);
        console.log(`  MP: ${heroes[key][1]}`);
    }
}

// solve([
//     "2",
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End"
//     ]);

solve([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]);
function bossRush(arr) {

    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;
    let bossCount = Number(arr.shift());

    for (let i = 0; i < bossCount; i++) {
        let currentBoss = arr[i];

        if (currentBoss.match(pattern)) {
            let match = pattern.exec(currentBoss);
            let bossName = match.groups['name'];
            let title = match.groups['title'];
            console.log(`${bossName}, The ${title}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armor: ${title.length}`)
        } else {
            console.log("Access denied!");
        }
    }
}

bossRush(['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|ALEX|:#Assistant Game Developer#']);
// bossRush(['3','|STEFAN|:#H1gh Overseer#','|IVAN|:#Master detective#','|KARL|: #Marketing lead#'])
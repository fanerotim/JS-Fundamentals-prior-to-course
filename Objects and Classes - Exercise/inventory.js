function inventory(arr) {

    let resultObj = [];

    arr.forEach(heroData => {
        let [hero, level, items] = heroData.split(' / ');
        level = Number(level);
        resultObj.push({hero, level, items})
    });

    resultObj.sort((a, b) => a.level - b.level);

    resultObj.forEach(hero => {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
    })
}

// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
//     ]);

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);
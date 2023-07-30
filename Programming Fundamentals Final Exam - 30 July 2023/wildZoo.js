function wildZoo(arr) {

    let command = arr.shift();
    let animals = {};
    
    while (command !== 'EndDay') {
        command = command.split(': ');
        let action = command.shift();
        command = command.join('').split('-');

        let animalName = command.shift();

        switch(action) {
            case 'Add':
                let neededFood = Number(command.shift());
                let area = command.shift();

                if (!animals.hasOwnProperty(animalName)) {
                    animals[animalName] = [neededFood, area];
                } else {
                    animals[animalName][0] += neededFood;
                }
                break;
            case 'Feed':
                let food = Number(command.shift());
                if (animals.hasOwnProperty(animalName)) {
                    animals[animalName][0] -= food;
                    if (animals[animalName][0] <= 0) {
                        console.log(`${animalName} was successfully fed`);
                        delete animals[animalName];
                    }
                }
                break;
        }
        command = arr.shift();
    }

    let areas = {};

    console.log('Animals:');

    for (let animal in animals) {
        console.log(` ${animal} -> ${animals[animal][0]}g`);
        let areaName = animals[animal][1];
        if (!areas.hasOwnProperty(areaName)) {
            areas[areaName] = 1;
        } else {
            areas[areaName]++;
        }
    }
    console.log('Areas with hungry animals:');
    for (let area in areas) {
        console.log(` ${area}: ${areas[area]}`)
    }
}

// wildZoo([
//     "Add: Adam-4500-ByTheCreek",
//     "Add: Maya-7600-WaterfallArea",
//     "Add: Maya-1230-WaterfallArea",
//     "Feed: Jamie-2000",
//     "EndDay"]);

// wildZoo([
//     "Add: Jamie-600-WaterfallArea",
//     "Add: Maya-6570-WaterfallArea",
//     "Add: Adam-4500-ByTheCreek",
//     "Add: Bobbie-6570-WaterfallArea",
//     "Feed: Jamie-2000",
//     "Feed: Adam-2000",
//     "Feed: Adam-2500",
//     "EndDay"]);

wildZoo([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"]);
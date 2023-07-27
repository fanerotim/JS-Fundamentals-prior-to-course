function solve(arr) {

    let resources = {};

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];

        if (i % 2 === 0) {
            if (!resources.hasOwnProperty(currentElement)) {
                resources[currentElement] = 0;
            }
            resources[currentElement] += Number(arr[i + 1]);
        }
    }
    for (let key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);
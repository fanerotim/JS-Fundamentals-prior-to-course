function minerTask(arr) {

    let minedGoods = {};

    let resource = '';
    let quantity = 0;


    for (let i = 0; i < arr.length; i++) {
        let isGathered = false;
        
        if (i % 2 === 0) {
            resource = arr[i];
        } else {
            quantity = Number(arr[i]);
            isGathered = true;
        }

        if (isGathered) {
            if (!minedGoods.hasOwnProperty(resource)) {
                minedGoods[resource] = quantity;
            } else {
                minedGoods[resource] += quantity;
            }
        }
    }
    for (let res in minedGoods) {
        console.log(`${res} -> ${minedGoods[res]}`)
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]);

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);
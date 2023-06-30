function partyTime(arr) {

    let regularList = {};
    let vipList = {};
    let arrived = {};
    let isParty = false;
    let vipCounter = 0;
    let regularCounter = 0;
    let arrivedCounter = 0;

    arr.forEach(guest => {

        if (guest !== 'PARTY' && isParty === false) {
            if (guest[0].charCodeAt() >= 48 && guest[0].charCodeAt() <= 58) {
                vipCounter++;
                vipList[vipCounter] = guest;
            } else {
                regularCounter++;
                regularList[regularCounter] = guest;
            }
        } else if (guest === 'PARTY') {
            isParty = true;
        }

        if (isParty && guest !== 'PARTY') {
            arrivedCounter++;
            arrived[arrivedCounter] = guest;
        }
    });

    for (let guestArrived in arrived) {
        let value = arrived[Number(guestArrived)];
        if (Object.values(vipList).includes(value)) {

            for (let key in vipList) {
                if (vipList[key] === value) {
                    delete vipList[key];
                    break
                }
            }
        } else if (Object.values(regularList).includes(value)) {
            for (let key in regularList) {
                if (regularList[key] === value) {
                    delete regularList[key];
                    break
                }
            }
        }
    }
    totalGuests = Object.keys(regularList).length + Object.keys(vipList).length;
    regularList = Object.entries(regularList);
    vipList = Object.entries(vipList);
    let resultList = vipList.concat(regularList);
    console.log(totalGuests);

    for (let guest of resultList) {
        console.log(guest[1]);
    }

}

// partyTime([
//     '7IK9Yo0h',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     '9NoBUajQ',
//     '9NoBUajQ',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',

// ]);

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])
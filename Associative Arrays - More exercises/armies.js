function armies(arr) {

    let leaders = {};
    let leader;
    let keyword;
    let armyName;
    let armyCount;

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        if (el.includes('arrives')) {
            el = el.split(' ');
            keyword = el.pop();
            leader = el.join(' ');
            leaders[leader] = [];
            // leaders[leader] = {};
        } else if (el.includes(':')) {
            el = el.split(': ')
            leader = el.shift();
            el = el.join('');
            el = el.split(', ');
            armyName = el[0];
            armyCount = Number(el[1]);
            if (leaders.hasOwnProperty(leader)) {
                let innerObj = {};
                innerObj[armyName] = armyCount,
                    leaders[leader].push(innerObj);
            }
        } else if (el.includes('+')) {
            el = el.split(' + ');
            armyName = el[0];
            armyCount = Number(el[1]);
            for (let key in leaders) {
                let innerArr = leaders[key];
                for (let army in innerArr) {
                    let currentInput = innerArr[army];
                    for (let cur in currentInput) {
                        if (currentInput.hasOwnProperty(armyName)) {
                            currentInput[armyName] = currentInput[armyName] + armyCount;
                        }
                    }
                }
            }
        } else if (el.includes('defeated')) {
            el = el.split(' ');
            keyword = el.pop();
            el = el.join(' ');
            if (leaders.hasOwnProperty(el)) {
                delete leaders[el];
            }
        }
    }

    leaders = Object.entries(leaders);

    for (let element of leaders) {
        let totalCount = 0;
        for (let innerEl of element[1]) {
            for (let innerKey in innerEl) {
                totalCount += innerEl[innerKey];
            }
        }
        element.push(totalCount);
    }
    leaders.sort((a, b) => b[2] - a[2]);

    for (let lead of leaders) {
        console.log(`${lead[0]}: ${lead[2]}`);
        let lastObj = {};
        for (let army of lead[1]) {
            for (let item in army) {
                lastObj[item] = army[item];
            }
        }
        lastObj = Object.entries(lastObj).sort((a, b) => b[1] - a[1]);
        for (let print of lastObj) {
            console.log(`>>> ${print[0]} - ${print[1]}`)
        }

    }
}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);

// armies([
//     'Rick Burr arrives',
//     'Findlay arrives',
//     'Rick Burr: Juard, 1500',
//     'Wexamp arrives',
//     'Findlay: Wexamp, 34540',
//     'Wexamp + 340',
//     'Wexamp: Britox, 1155',
//     'Wexamp: Juard, 43423'])
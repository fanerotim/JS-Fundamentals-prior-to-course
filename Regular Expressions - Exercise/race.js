function race(arr) {

    let participants = arr.shift();

    let index = 0;
    let command = arr[index];

    let letterPattern = /[A-Za-z]+/g;
    let digitPattern = /\d+/g;
    let results = {};

    while (command !== 'end of race') {
        let currentName = '';
        let currentDistance = 0;
        for (let item of command) {

            if (item.match(letterPattern)) {
                currentName += item;
            } else if (item.match(digitPattern)) {
                currentDistance += Number(item);
            }
        }

        if (participants.includes(currentName)) {
            if (!results.hasOwnProperty(currentName)) {
                results[currentName] = currentDistance;
            } else {
                results[currentName] += currentDistance;
            }
        }
        index++;
        command = arr[index];
    }
    results = Object.entries(results).sort((a, b) => b[1] - a[1])

    for (let i = 0; i < 3; i++) {
        switch (i) {
            case 0:
                console.log(`${i + 1}st place: ${results[i][0]}`);
                break;
            case 1:
                console.log(`${i + 1}nd place: ${results[i][0]}`);
                break;
            case 2:
                console.log(`${i + 1}rd place: ${results[i][0]}`);
                break;
        }
    }
}

// race([
//     'George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@ ',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race']);

race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);
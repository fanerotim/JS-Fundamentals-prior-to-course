function lift(arr) {

    let peopleWaiting = arr.shift();
    let startingPeopleWaiting = peopleWaiting;
    let wagonsState = arr.shift().split(' ');
    let capacityCounter = 0;
    let isFull = false;
    let maxCapacity = 4;

    for (let i = 0; i < wagonsState.length; i++) {

        let fullCapacity = wagonsState.map(a => {
            let currentWagon = Number(a);
            if (currentWagon === 4) {
                capacityCounter++;
            } else {
                capacityCounter = 0;
            }
        })

        if (capacityCounter === wagonsState.length) {
            isFull = true;
            break;
        } else {
            capacityCounter = 0;
        }
        let wagon = 0;

        while (wagonsState[wagon] < maxCapacity || startingPeopleWaiting === peopleWaiting) {
            let curWagon = Number(wagonsState[wagon]);

            if (curWagon < maxCapacity) {
                wagonsState[wagon]++;
                peopleWaiting--;
            }

            if (Number(wagonsState[wagon]) === maxCapacity) {
                wagon++;
            }

            if (peopleWaiting === 0) {
                break;
            }
        }
    }

    if (peopleWaiting === 0 && !isFull) {
        console.log("The lift has empty spots!");
        console.log(wagonsState.join(' '));
    } else if (isFull && peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(wagonsState.join(' '))
    } else if (isFull && peopleWaiting === 0) {
        console.log(wagonsState.join(' '));
    }
}

// lift([
//     "15",
//     "0 0 0 0 0"
// ]);

// lift([
//     "20",
//     "0 2 0"
// ])

lift([
    '1',
    '4 4 4'
])
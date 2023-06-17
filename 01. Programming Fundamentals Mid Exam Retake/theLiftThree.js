function theLift(arr) {

    let peopleWaiting = Number(arr.shift());
    let wagons = arr.shift().split(' ').map(a => Number(a));
    let maxCapacity = 4;
    let difference = 0;
    for (let i = 0; i < wagons.length; i++) {
        let currentWagon = wagons[i];

        if (currentWagon < maxCapacity) {
            difference = maxCapacity - currentWagon;
            if (peopleWaiting >= difference) {
                wagons[i] += difference;
                peopleWaiting -= difference;
            } else {
                wagons[i] += peopleWaiting;
                peopleWaiting = 0;
            }
        } else {
            continue;
        }
    }

    let isEmpty = false;
    for (el of wagons) {
        if (el < maxCapacity) {
            isEmpty = true;
        }
    }

    if (peopleWaiting <= 0 && isEmpty) {
        console.log("The lift has empty spots!");
        console.log(wagons.join(' '));
    } else if (peopleWaiting > 0 && !isEmpty) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(wagons.join(' '));
    } else {
        console.log(wagons.join(' '));
    }
}

// theLift([
//     "15",
//     "0 0 0 0 0"
//    ])
   
theLift([
    "10",
    "0 2 0"
   ]);
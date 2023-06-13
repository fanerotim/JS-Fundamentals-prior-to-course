function theLift(arr) {

    let peopleWaiting = Number(arr.shift());
    let maxCapacity = 4;
    let isFull = true;
    let currentLift = arr.shift().split(' ');
    currentLift = currentLift.map(a => Number(a));

    for (let i = 0; i < currentLift.length; i++) {
        let currentWagon = currentLift[i];

        if (currentWagon < maxCapacity) {
            let difference = maxCapacity - currentWagon;

            if (peopleWaiting >= maxCapacity) {
                currentLift[i] += difference;
                peopleWaiting -= difference;
            } else if (peopleWaiting < maxCapacity) {
                currentLift[i] += peopleWaiting;
                peopleWaiting -= peopleWaiting;
            }
            difference = 0;
        }
    }

    for (wagon of currentLift) {
        if (wagon < maxCapacity) {
            isFull = false;
        }
    }

    if (peopleWaiting === 0 && isFull === false) {
        console.log("The lift has empty spots!");
    } else if (peopleWaiting > 0 && isFull === true) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
    }
    console.log(currentLift.join(' '));
}

theLift([
    "15",
    "0 0 0 0 0"
]);

theLift([
    "20",
    "0 2 0"
]);

theLift(["8", "0 0 3"])